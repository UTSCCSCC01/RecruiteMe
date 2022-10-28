const Company = require("../models/Company");

const add_company = async (req, res) => {
    if (
        !req.body.companyName ||
        !req.body.about
    ) {
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



module.exports = {
    add_company,
    view_company,
    update_company,


};

