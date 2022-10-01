const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    recruiter: {
        type: Boolean,
        required: true
    },
    company: {
        type: String,
        required: false
    },

}
);

const User = mongoose.model('Users', userSchema)

module.exports = User;