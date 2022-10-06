const { passport, bcrypt } = require('../mongodb_setup/setup.js')
const User = require("../models/User");

const login = async (req, res, next) => {

    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return res.status(401).json(err);
        }
        if (user) {
            req.login(user, function (err) {
                if (err) { return next(err); }
                return res.status(200).send("User logged in Succesfully");
            });

        } else {
            res.status(401).json(info["message"]);
        }
    })(req, res, next)
};


const register = async (req, res, next) => {

    if (!req.body.email || !req.body.password || req.body.recruiter == null) {
        return res.status(400).send("There are missing fields in request body");
    }
    else {
        const user = await User.findOne({
            email: req.body.email
        })
        if (user) {
            res.status(400).send("Sorry, that email is already  taken.")
        } else if (req.body.email == "" || req.body.password == "") {
            res.status(400).send("Please fill out all the fields.")
        } else {
            bcrypt.genSalt(10, function (err, salt) {
                if (err) return next(err);
                bcrypt.hash(req.body.password, salt, function (err, hash) {
                    if (err) return next(err);
                    new User({
                        email: req.body.email,
                        password: hash,
                        recruiter: req.body.recruiter,
                    }).save()
                    return res.status(201).send("User resgistered succesfully")// res.redirect('/login');
                });
            });
        }
    }
}

const current_user = async (req, res, next) => {
    if (req.isAuthenticated()) {
        output = {}
        output["_id"] = req.user._id
        output["email"] = req.user.email
        output["recruiter"] = req.user.recruiter
        res.status(200).send(output)
    } else {
        res.status(401).send("login first")
    }
}


const logout = async (req, res, next) => {

    req.logout(function (err) {
        if (err) { return next(err); }
        res.status(200).send("User Successfully logged out");
    });
}

module.exports = { register, login, logout, current_user }