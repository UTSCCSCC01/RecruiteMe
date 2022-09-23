const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true
    },

}
);

const Recruiter = mongoose.model('Recruiters', recruiterSchema)

module.exports = Recruiter;