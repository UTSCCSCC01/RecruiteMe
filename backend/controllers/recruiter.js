const Recruiter = require("../models/Recruiter");
const ProfilePicture = require("../models/Image");
const Post = require("../models/Posts");
const Company = require("../models/Company");
const JobSeeker = require("../models/JobSeeker");

const add_recruiter = async (req, res) => {
    if (
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.age ||
        !req.body.bio ||
        !req.body.workExp ||
        !req.body.currStatus
    ) {
        return res.status(400).send("There are missing fields in request body");
    } else {
        Recruiter.exists({ uid: req.user._id }, function (err, docs) {
            if (docs != null) {
                res.status(403).send(
                    "User already exists, use 'put' endpoint for update"
                );
            } else {
                const new_recruiter = new Recruiter({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    uid: req.user._id,
                    email: req.user.email,
                    age: req.body.age,
                    bio: req.body.bio,
                    workExperience: req.body.workExp,
                    jobPosts: [],
                    currStatus: req.body.currStatus,
                });
                new_recruiter
                    .save()
                    .then((result) => {
                        res.status(200).send(result);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send(err);
                    });
            }
        });
    }
};

const update_recruiter = async (req, res) => {
    Recruiter.exists({ uid: req.user._id }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("User doesn't exist");
        } else {
            filter = { uid: req.user._id };

            let update = {};
            if (req.body.firstName) {
                update["firstName"] = req.body.firstName;
            }
            if (req.body.lastName) {
                update["lastName"] = req.body.lastName;
            }
            if (req.body.bio) {
                update["bio"] = req.body.bio;
            }
            if (req.body.workExp) {
                update["workExperience"] = req.body.workExp;
            }
            if (req.body.currStatus) {
                update["currStatus"] = req.body.currStatus;
            }

            Recruiter.findOneAndUpdate(filter, update)
                .then((result) => {
                    res.status(200).send(result);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send(err);
                });
        }
    });
};

const view_recruiter_profile = async (req, res) => {
    Recruiter.find({ uid: req.user._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User doesnt exist");
            console.log(err);
        } else {
            res.status(200).send(docs);
        }
    });
};

const view_recruiters = async (req, res) => {
    Recruiter.find({}, function (err, recruiters) {
        if (err) {
            res.send(500).send("Internal Err");
            console.log(err);
        } else {
            res.status(200).send(recruiters);
        }
    });
};

const add_recruiter_profile_picture = async (req, res) => {
    if (!req.files.image.name) {
        return res.status(400).send("File is missing a name");
    } else {
        ProfilePicture.exists({ _id: req.user._id }, function (err, docs) {
            if (docs != null) {
                res.status(403).send(
                    "Profile picture for this user already exists, use 'put' endpoint for update"
                );
            } else {
                const new_profile_picture = new ProfilePicture({
                    _id: req.user._id,
                    data: mongodb.Binary(req.files.image.data),
                });
                new_profile_picture
                    .save()
                    .then((result) => {
                        res.status(200).send(result);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send(err);
                    });
            }
        });
    }
};

const update_recruiter_profile_picture = async (req, res) => {
    ProfilePicture.exists({ _id: req.user._id }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("Profile picture doesn't exist");
        } else {
            filter = { _id: req.user._id };

            let update = {};
            update["data"] = mongodb.Binary(req.files.image.data);

            ProfilePicture.findOneAndUpdate(filter, update)
                .then((result) => {
                    res.status(200).send(result);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send(err);
                });
        }
    });
};

const view_recruiter_profile_picture = async (req, res) => {
    ProfilePicture.find({ _id: req.user._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User profile picture doesn't exist");
            console.log(err);
        } else {
            res.status(200).send(docs[0]);
        }
    });
};

const add_job_post = async (req, res) => {
    if (
        !req.body.role ||
        !req.body.description ||
        !req.body.qualification ||
        !req.body.deadline
    ) {
        return res.status(400).send("There are missing fields in request body");
    } else {

        Recruiter.findOne({ uid: req.user._id }, (err, recruiter) => {
            if (recruiter == null) {
                res.status(404).send("recruiter doesnt exists");
            } else {
                Company.findOne({ _id: recruiter.companyId }, (err, company) => {
                    if (company == null) {
                        res.status(404).send("Company Page should be added first");
                    } else {
                        const new_job_post = new Post({
                            companyName: recruiter.companyName,
                            companyId: recruiter.companyId,
                            role: req.body.role,
                            description: req.body.description,
                            qualification: req.body.qualification,
                            applicants: [],
                            recruiter: req.user._id,
                            isHiring: true,
                            posted: Date(),
                            deadline: req.body.deadline,
                        });
                        new_job_post
                            .save()
                            .then((result) => {
                                Recruiter.findOneAndUpdate(
                                    { uid: req.user._id },
                                    { $push: { jobPosts: result._id } },
                                    (err, _) => {
                                        if (err) {
                                            res.status(500).send(err);
                                        }
                                        else {
                                            Company.findOneAndUpdate(
                                                { _id: recruiter.companyId },
                                                { $push: { jobPosts: result._id } },
                                                (err, _) => {
                                                    if (err) {
                                                        res.status(500).send(err);
                                                    } else {
                                                        res.status(200).send("Added Succesfully");
                                                    }
                                                }
                                            );
                                        }
                                    }
                                );

                            })
                            .catch((err) => {
                                console.log(err);
                                res.status(500).send(err);
                            });
                    }
                })
            }

        });
    };
}

const view_others_profile_picture = async (req, res) => {
    ProfilePicture.find({ _id: req.body._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User profile picture doesn't exist");
            console.log(err);
        } else {
            res.status(200).send(docs[0]);
        }
    });
};

const view_recruiter = async (req, res) => {
    Recruiter.find({ uid: req.params.id }, function (err, recruiter) {
        if (err) {
            res.send(500).send("Internal Err");
            console.log(err);
        } else {
            if (recruiter.length != 0) {
                res.status(200).send(recruiter);
            } else {
                res.status(404).send(
                    "Recruiter doesnt exist, try to pass recruiter _id"
                );
            }
        }
    });
};

const view_my_posts = async (req, res) => {
    Post.find({ recruiter: req.user._id }, function (err, posts) {
        if (err) {
            res.send(500).send("Internal Err");
            console.log(err);
        } else {
            if (posts.length != 0) {
                res.status(200).send(posts);
            } else {
                res.status(404).send("Recruiter hasnt made any posts");
            }
        }
    });
};


const send_online_assesment = async (req, res) => {

    if (!req.body.uid || !req.body.assesment_link || !req.body.postId) {
        return res.status(400).send("Missing fields")
    }
    JobSeeker.exists({ uid: req.body.uid }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("Job seeker doesn't exist")
        } else {
            filter = { uid: req.body.uid, "appliedPost.postId": req.body.postId }

            let update = {}
            update["appliedPost.$.assesmentLink"] = req.body.assesment_link

            JobSeeker.findOneAndUpdate(filter, update).then((result) => {
                res.status(200).send("Assement Send Succesfully");
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });

        }
    });
}

const update_interview_data = async (req, res) => {
    Post.exists({ _id: req.body.postId }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("Post doesn't exist")
        } else {
            filter = { _id: req.body.postId }

            let update = {}
            if (req.body.availableDates) {
                update["availableDates"] = req.body.availableDates
            }
            if (req.body.interviewLink) {
                update["interviewLink"] = req.body.interviewLink
            }

            Post.findOneAndUpdate(filter, update).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });


        }
    });
}

module.exports = {
    add_recruiter,
    update_recruiter,
    view_recruiter_profile,
    view_recruiters,
    add_recruiter_profile_picture,
    update_recruiter_profile_picture,
    view_recruiter_profile_picture,
    add_job_post,
    view_others_profile_picture,
    view_recruiter,
    view_my_posts,
    send_online_assesment,
    update_interview_data
};

