const express = require('express')
const fileUpload = require('express-fileupload')
const User = require("../models/User");
const JobSeeker = require("../models/JobSeeker");
var fs = require('fs');
const mongodb = require('mongodb');
const mongoose = require('mongoose');


const ProfilePicture = require("../models/Image");
const Resume = require("../models/Resume");
const Post = require("../models/Posts");
const { Schema } = require('mongoose');


// Profile text data API
const add_job_seeker = async (req, res) => {

    if (!req.body.firstName || !req.body.lastName || !req.body.phoneNumber || !req.body.age || !req.body.bio || !req.body.workExp || !req.body.education || !req.body.currStatus) {
        return res.status(400).send("There are missing fields in request body");
    }
    else {
        JobSeeker.exists({ uid: req.user._id }, function (err, docs) {
            if (docs != null) {
                res.status(403).send("User already exists, use 'put' endpoint for update")
            } else {
                const new_job_seeker = new JobSeeker({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    uid: req.user._id,
                    phoneNumber: req.body.phoneNumber,
                    age: req.body.age,
                    bio: req.body.bio,
                    workExperience: req.body.workExp,
                    education: req.body.education,
                    appliedPost: [],
                    currStatus: req.body.currStatus,
                    profilePicture: req.body.profilePicture,
                    resume: req.body.resume
                });
                new_job_seeker
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

const update_job_seeker = async (req, res) => {

    JobSeeker.exists({ uid: req.user._id }, function (err, docs) {
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
            if (req.body.phoneNumber) {
                update["phoneNumber"] = req.body.phoneNumber
            }
            if (req.body.bio) {
                update["bio"] = req.body.bio
            }
            if (req.body.workExp) {
                update["workExperience"] = req.body.workExp
            }
            if (req.body.education) {
                update["education"] = req.body.education
            }
            if (req.body.currStatus) {
                update["currStatus"] = req.body.currStatus
            }

            JobSeeker.findOneAndUpdate(filter, update).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });


        }
    });
}

const view_job_seeker_profile = async (req, res) => {
    JobSeeker.find({ uid: req.user._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User doesnt exist")
            console.log(err);
        }
        else {
            res.status(200).send(docs)
        }
    });
}

const view_job_seekers = async (req, res) => {
    JobSeeker.find({}, function (err, jobseekers) {
        if (err) {
            res.send(500).send("Internal Err")
            console.log(err);
        }
        else {
            res.status(200).send(jobseekers)
        }
    });
}

const view_job_seeker = async (req, res) => {
    JobSeeker.find({ uid: req.params.id }, function (err, jobseeker) {
        if (err) {
            res.send(500).send("Internal Err")
            console.log(err);
        }
        else {
            res.status(200).send(jobseeker)
        }
    });
}

const add_job_seeker_profile_picture = async (req, res) => {
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

const update_job_seeker_profile_picture = async (req, res) => {

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

const view_job_seeker_profile_picture = async (req, res) => {
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

const view_others_profile_picture = async (req, res) => {
    ProfilePicture.find({ _id: req.params.id }, function (err, docs) {
        if (err) {
            res.send(400).send("User profile picture doesn't exist")
            console.log(err);
        }
        else {
            res.status(200).send(docs[0])
        }
    });
}

// Resume API
const add_job_seeker_resume = async (req, res) => {
    if (!req.files.resume.name) {
        return res.status(400).send("File is missing a name");
    }
    else {
        Resume.exists({ _id: req.user._id }, function (err, docs) {
            if (docs != null) {
                res.status(403).send("Resume for this user already exists, use 'put' endpoint for update")
            } else {
                const new_resume = new Resume({
                    _id: req.user._id,
                    name: req.files.resume.name,
                    data: mongodb.Binary(req.files.resume.data)
                });
                new_resume
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

const update_job_seeker_resume = async (req, res) => {

    Resume.exists({ _id: req.user._id }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("Resume doesn't exist")
        } else {
            filter = { _id: req.user._id }

            let update = {}
            update["name"] = req.files.resume.name
            update["data"] = mongodb.Binary(req.files.resume.data)

            Resume.findOneAndUpdate(filter, update).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });
        }
    });
}

const view_job_seeker_resume = async (req, res) => {
    Resume.find({ _id: req.user._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User resume doesn't exist")
            console.log(err);
        }
        else {
            res.status(200).send(docs[0])
        }
    });
}

const view_others_job_seeker_resume = async (req, res) => {
    Resume.find({ _id: req.params._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User resume doesn't exist")
            console.log(err);
        }
        else {
            res.status(200).send(docs[0])
        }
    });
}

// Job post API
const view_open_job_posts = async (req, res) => {
    Post.find({ isHiring: true }, function (err, posts) {
        if (err) {
            res.send(500).send("Internal Err")
            console.log(err);
        }
        else {
            res.status(200).send(posts)
        }
    });
}

//APPLY TO JOB POST
const apply_job_post = async (req, res) => {

    if (!req.body.post_id) {
        res.send(400).send("Missing post_id from body")
    }
    else {
        // Add post to appliedPost list in JobSeeker schema

        JobSeeker.findOne({ uid: req.user._id }).then(async (result) => {
            var posts = result.appliedPost
            var found = false
            if (posts.length == 0) {
                found = false
            }
            else {
                posts.forEach((post, _) => {
                    if (post.postId === req.body.post_id) {
                        found = true
                        return
                    }
                });

            }
            if (!found) {
                posts.push({
                    postId: req.body.post_id,
                    status: 0
                })
                JobSeeker.findOneAndUpdate(
                    { uid: req.user._id },
                    {
                        $set: {
                            appliedPost: posts
                        }
                    }, (err, _) => {
                        if (err) {
                            return res.status(400).send(err);
                        }
                        else {
                            // Add applicant to applicants list in post schema
                            const update = {
                                $push: { applicants: req.user._id },
                                $inc: { numofApplicants: 1 }
                            }
                            Post.findOneAndUpdate(
                                { _id: req.body.post_id },
                                update
                                ,
                                (err, _) => {
                                    if (err) {
                                        return res.status(400).send("Internal Error")
                                    }
                                    else {
                                        return res.status(200).send("Applied Succesfully");
                                    }
                                });
                        }
                    }
                )
            }
            else {
                return res.status(201).send("Already Applied");
            }

        }).catch((err) => {
            console.log(err);
            res.status(500).send(err)
        });


    }

}

const my_job_applications = async (req, res) => {

    if (!req.user.recruiter) {
        JobSeeker.find({ uid: req.user._id }, function (err, docs) {
            if (err) {
                res.send(404).send("User doesn't exist")
                console.log(err);
            }
            else {
                if (docs.length == 0) {
                    res.status(404).send("User doesn't exist")
                }
                else {
                    res.status(200).send(docs[0].appliedPost)

                }

            }
        });
    }
    else {
        res.status(404).send("Only Job seeker can acces this endpoint")
    }

}



module.exports = {
    add_job_seeker, update_job_seeker,
    view_job_seeker_profile, view_job_seekers,
    add_job_seeker_profile_picture,
    update_job_seeker_profile_picture,
    view_job_seeker_profile_picture, add_job_seeker_resume,
    update_job_seeker_resume, view_job_seeker_resume,
    view_open_job_posts, view_others_profile_picture,
    apply_job_post, view_job_seeker,
    my_job_applications, view_others_job_seeker_resume,
}
