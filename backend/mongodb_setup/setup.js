const passport = require('passport')
const session = require('express-session')
const bcrypt = require('bcrypt')
const mongoose = require("mongoose");
const User = require("../models/User");

var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({
            email: username
        }, (err, user) => {
            if (err) return done(err)
            if (!user) return done(null, false, { message: 'User not found!' });
            bcrypt.compare(password, user.password, function (err, res) {
                if (err) return done(err)
                if (res) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Incorrect password!' });
                }
            })
        })
    }
));


var MongoDBStore = require('connect-mongodb-session')(session);


const uri = `mongodb+srv://pritishstudies:${process.env.MONGO_PASS}@recruitmecluster.ojsrxbu.mongodb.net/?retryWrites=true&w=majority`;

var store = new MongoDBStore({
    uri: uri,
    collection: 'mySessions'
});

/* ************ */

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to Database");
    } catch (error) {
        console.error(error);
    }
}
connect();


module.exports = { passport, bcrypt, store }