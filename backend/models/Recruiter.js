const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    uid: { type: Schema.Types.ObjectId, ref: 'User' },
    companyName: { type: String },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company' },
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