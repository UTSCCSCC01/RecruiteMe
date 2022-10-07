const User = require("../models/User");
const JobSeeker = require("../models/JobSeeker");

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

module.exports = { add_job_seeker, update_job_seeker,view_job_seeker_profile, view_job_seekers }