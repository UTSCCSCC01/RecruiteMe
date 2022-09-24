require("dotenv").config();

const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const Recruiter = require("./models/recruiter");

const app = express();
app.use(json()); // for parsing application/json
app.use(urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const port = process.env.PORT || 4000;

const uri = `mongodb+srv://pritishstudies:${process.env.MONGO_PASS}@recruitmecluster.ojsrxbu.mongodb.net/?retryWrites=true&w=majority`;

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

const allowedOrigins = ["http://localhost:3000"];
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.listen(port, () => console.log(`Listening on port ${port}..`));

app.post("/recruiters", (req, res) => {
    if (!req.body.name || !req.body.age || !req.body.email || !req.body.company)
        return res.status(400).send("There are missing fields in request body");
    else {
        const new_recruiter = new Recruiter({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            company: req.body.company,
        });
        new_recruiter
            .save()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
app.get("/recruiters", (req, res) => {
    Recruiter.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/recruiters/:id", (req, res) => {
    if (req.params.id) {
        Recruiter.findById(req.params.id)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        res.status(400).send("There are missing fields in request body");
    }
});

// const inventory_routes = require('./routes/inventory_route')
// const image_routes = require('./routes/image_route')

// app.use('/api/inventory', inventory_routes);
// app.use('/api/image', image_routes);
