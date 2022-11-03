const Company = require("../models/Company");
const Recruiter = require("../models/Recruiter");
const ProfilePicture = require("../models/Image");
const mongodb = require('mongodb');

const add_company = async (req, res) => {

    if (!req.user.recruiter) {

        return res.status(400).send("User should be a recruiter");
    }
    if (!req.body.companyName || !req.body.about) {
        return res.status(400).send("There are missing fields in request body");
    } else {
        Company.exists({ companyName: req.body.companyName }, function (err, docs) {
            if (docs != null) {
                res.status(403).send(
                    "Company already exists, use 'put' endpoint for update"
                );
            } else {
                const new_company = new Company({
                    companyName: req.body.companyName,
                    about: req.body.about,
                    createrId: req.user._id,
                    jobPosts: [],
                    reviews: []
                });
                new_company
                    .save()
                    .then((result) => {

                        /// add companyy to recruiter
                        Recruiter.exists({ uid: req.user._id }, function (err, docs) {
                            if (docs == null) {
                                res.status(403).send("User doesn't exist");
                            } else {
                                filter = { uid: req.user._id };

                                let update = { "companyId": result._id, "companyName": result.companyName };

                                Recruiter.findOneAndUpdate(filter, update)
                                    .then((result) => {
                                        return res.status(200).send(result);
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                        return res.status(500).send(err);
                                    });
                            }
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send(err);
                    });
            }
        });
    }
};

const update_company = async (req, res) => {
    if (!req.body.companyId) {
        return res.status(400).send("There are missing fields in request body");
    }
    else {
        Company.exists({ _id: req.body.companyId }, function (err, docs) {
            if (docs == null) {
                res.status(403).send("Company doesn't exist");
            } else {
                filter = { _id: req.body.companyId };
                let update = {};
                if (req.body.about) {
                    update["about"] = req.body.about;
                }

                Company.findOneAndUpdate(filter, update)
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

const view_company = async (req, res) => {
    Company.findOne({ _id: req.params.id }, function (err, company) {
        if (err) {
            res.status(400).send("Company doesnt exist");
            console.log(err);
        } else {
            res.status(200).send(company);
        }
    });

};

const add_review = async (req, res) => {

    if (!req.body.companyId || !req.body.review) {
        return res.status(400).send("There are missing fields in request body");
    }
    else {

        Company.findOne({ _id: req.body.companyId }).then(async (result) => {
            var reviews = result.reviews
            reviews.push(req.body.review)

            Company.findOneAndUpdate(
                { _id: req.body.companyId },
                {
                    $set: {
                        reviews: reviews
                    }
                }, (err, _) => {
                    if (err) {
                        return res.status(400).send(err);
                    }
                    else {
                        return res.status(200).send("Review added Successfully");
                    }
                }
            )
        }).catch((err) => {
            console.log(err);
            res.status(500).send(err)
        });
    }
};


const view_reviews = async (req, res) => {
    if (!req.params.companyId) {
        return res.status(400).send("There are missing fields in request params");
    }
    else {
        Company.find({ _id: req.params.companyId }, function (err, company) {
            if (err) {
                res.send(500).send("Internal Err")
                console.log(err);
            }
            else {
                res.status(200).send(company.reviews)
            }
        });
    }
};

const add_company_profile_picture = async (req, res) => {
    if (!req.files.image.name || !req.body.companyId) {
        return res.status(400).send("Missing file name or company ID");
    } else {
        ProfilePicture.exists({ _id: req.body.companyId }, function (err, docs) {
            if (docs != null) {
                res.status(403).send("Profile picture for this user already exists, use 'put' endpoint for update")
            } else {
                const new_profile_picture = new ProfilePicture({
                    _id: req.body.companyId,
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

const update_company_profile_picture = async (req, res) => {
    ProfilePicture.exists({ _id: req.body.companyId }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("Profile picture doesn't exist")
        } else {
            filter = { _id: req.body.companyId }

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

const view_company_profile_picture = async (req, res) => {
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



module.exports = {
    add_company,
    view_company,
    update_company,
    add_review,
    view_reviews,
    add_company_profile_picture,
    update_company_profile_picture,
    view_company_profile_picture
};

