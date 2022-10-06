
const User = require("../models/User");
const Recruiter = require("../models/Recruiter");

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

module.exports = { add_recruiter, update_recruiter, view_recruiter_profile, view_recruiters }