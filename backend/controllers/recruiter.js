const User = require("../models/User");
const Recruiter = require("../models/Recruiter");
const ProfilePicture = require("../models/Image");
const Post = require("../models/Posts");

const add_recruiter = async (req, res) => {

    if (!req.body.firstName || !req.body.lastName || !req.body.company || !req.body.age || !req.body.bio || !req.body.workExp || !req.body.currStatus) {
        return res.status(400).send("There are missing fields in request body");
    }
    else {
        Recruiter.exists({ uid: req.user._id }, function (err, docs) {
            if (docs != null) {
                res.status(403).send("User already exists, use 'put' endpoint for update")
            } else {
                const new_recruiter = new Recruiter({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    uid: req.user._id,
                    company: req.body.company,
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
                        res.status(500).send(err)
                    });
            }
        });

    }


};

const update_recruiter = async (req, res) => {

    Recruiter.exists({ uid: req.user._id }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("User doesn't exist")
        } else {
            filter = { uid: req.user._id }

            let update = {}
            if (req.body.firstName) {
                update["firstName"] = req.body.firstName
            }
            if (req.body.lastName) {
                update["lastName"] = req.body.lastName
            }
            if (req.body.company) {
                update["company"] = req.body.company
            }
            if (req.body.bio) {
                update["bio"] = req.body.bio
            }
            if (req.body.workExp) {
                update["workExperience"] = req.body.workExp
            }
            if (req.body.currStatus) {
                update["currStatus"] = req.body.currStatus
            }

            Recruiter.findOneAndUpdate(filter, update).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });


        }
    });


}

const view_recruiter_profile = async (req, res) => {

    Recruiter.find({ uid: req.user._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User doesnt exist")
            console.log(err);
        }
        else {
            res.status(200).send(docs)
        }
    });
}
const view_recruiters = async (req, res) => {
    Recruiter.find({}, function (err, recruiters) {
        if (err) {
            res.send(500).send("Internal Err")
            console.log(err);
        }
        else {
            res.status(200).send(recruiters)
        }
    });
}

const add_recruiter_profile_picture = async (req, res) => {
    if (!req.files.image.name) {
        return res.status(400).send("File is missing a name");
    }
    else {
        ProfilePicture.exists({ _id: req.user._id }, function (err, docs) {
            if (docs != null) {
                res.status(403).send("Profile picture for this user already exists, use 'put' endpoint for update")
            } else {
                const new_profile_picture = new ProfilePicture({
                    _id: req.user._id,
                    data: mongodb.Binary(req.files.image.data)
                });
                new_profile_picture
                    .save()
                    .then((result) => {
                        res.status(200).send(result);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send(err)
                    });
            }
        });
    }
};

const update_recruiter_profile_picture = async (req, res) => {

    ProfilePicture.exists({ _id: req.user._id }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("Profile picture doesn't exist")
        } else {
            filter = { _id: req.user._id }

            let update = {}
            update["data"] = mongodb.Binary(req.files.image.data)

            ProfilePicture.findOneAndUpdate(filter, update).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });
        }
    });
}

const view_recruiter_profile_picture = async (req, res) => {
    ProfilePicture.find({ _id: req.user._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User profile picture doesn't exist")
            console.log(err);
        }
        else {
            res.status(200).send(docs[0])
        }
    });
}

const add_job_post = async (req, res) => {
    if (!req.body.companyName || !req.body.role || !req.body.description || !req.body.qualification || !req.body.deadline) {
        return res.status(400).send("There are missing fields in request body");
    } else {
        const new_job_post = new Post({
            companyName: req.body.companyName,
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
                res.status(200).send(result);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });
    }
};

const view_others_profile_picture = async (req, res) => {
    ProfilePicture.find({ _id: req.body._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User profile picture doesn't exist")
            console.log(err);
        }
        else {
            res.status(200).send(docs[0])
        }
    });
}

module.exports = { add_recruiter, update_recruiter, view_recruiter_profile, view_recruiters, add_recruiter_profile_picture, update_recruiter_profile_picture, view_recruiter_profile_picture, add_job_post, view_others_profile_picture }
