require("dotenv").config();

const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const express = require("express");
const { AuthRoutes, RecruiterRoutes, Job_SeekerRoutes } = require('./routes')
const { passport, store } = require("./mongodb_setup/setup")
const session = require('express-session')

const app = express();


app.use(express.static(__dirname + '/public'));
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'RecruitMe',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());



app.use(json()); // for parsing application/json
app.use(urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const port = process.env.PORT || 4000;

app.use(
    cors({
        origin: "http://localhost:4000",
    })
);


app.use("/auth", AuthRoutes);
app.use("/recruiter", RecruiterRoutes);
app.use("/job-seeker", Job_SeekerRoutes);

// app.get("/users", loggedIn, (req, res) => {
//     User.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get("/users/:id", loggedIn, (req, res) => {
//     if (req.params.id) {
//         User.findById(req.params.id)
//             .then((result) => {
//                 res.send(result);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     } else {
//         res.status(400).send("There are missing fields in request body");
//     }
// });



app.listen(port, () => console.log(`Listening on port ${port}..`));




