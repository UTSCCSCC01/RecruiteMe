const User = require("../models/User");
const Job_Seeker = require("../models/Job-Seeker");

const add_job_seeker = async (req, res) => {

    if (!req.body.name || !req.body.phoneNumber || !req.body.age || !req.body.bio || !req.body.workExp || !req.body.education || !req.body.currStatus) {
        return res.status(400).send("There are missing fields in request body");
    }
    else {
        Job_Seeker.exists({ uid: req.user._uid }, function (err, docs) {
            if (!err) {
                res.status(403).send("User already exist, use 'put' endpoint for update")
            } else {
                const new_job_seeker = new Job_Seeker({
                    name: req.body.name,
                    uid: req.user._id,
                    phoneNumber: req.body.company,
                    age: req.body.age,
                    bio: req.body.bio,
                    workExperience: req.body.workExp,
                    education: req.body.education,
                    appliedPost: [],
                    currStatus: req.body.currStatus,
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

    Job_Seeker.exists({ uid: req.user._uid }, function (err, docs) {
        if (err) {
            res.status(403).send("User doesn't exist")
        } else {
            filter = { uid: req.user._id }

            let update = {}
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

            Job_Seeker.findOneAndUpdate(filter, update).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });


        }
    });


}

const view_job_seeker = async (req, res) => {

}




module.exports = { add_job_seeker, update_job_seeker, view_job_seeker }