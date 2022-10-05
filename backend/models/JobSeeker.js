const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const jobseekerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    uid: { type: Schema.Types.ObjectId, ref: 'User' },
    phoneNumber: {
        type: Number,
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
    education: {
        type: {},
        required: false
    },
    appliedPost: {
        type: Map,
        of: new Schema({
            postId: { type: Schema.Types.ObjectId, ref: 'Posts' },
            status: Boolean
        })
    },
    currStatus: {
        type: String,
        required: false
    }
}
);

const JobSeeker = mongoose.model('JobSeekers', jobseekerSchema)

module.exports = JobSeeker;