const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    uid: { type: Schema.Types.ObjectId, ref: 'User' },
    company: {
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
    bio: {
        type: String,
        required: false
    },
    workExperience: {
        type: {},
        required: false
    },
    jobPosts: [
        { type: Schema.Types.ObjectId, ref: 'Posts' }
    ],
    currStatus: {
        type: String,
        required: false
    }

}
);

const Recruiter = mongoose.model('Recruiters', recruiterSchema)

module.exports = Recruiter;