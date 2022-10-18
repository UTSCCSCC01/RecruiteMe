const Post = require("../models/Posts");
const User = require("../models/User");
const Recruiter = require("../models/Recruiter");



const view_post = async (req, res) => {
    Post.find({ _id: req.params.pid }, function (err, post) {
        if (err) {
            res.send(500).send("Internal Err")
            console.log(err);
        }
        else {
            res.status(200).send(post[0])
        }
    });
}

module.exports = {
    view_post
}
