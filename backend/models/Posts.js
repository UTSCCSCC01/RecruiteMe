const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    numofApplicants: {
        type: Number,
        default: 0,
        required: true
    },
    recruiter: {
        type: Boolean,
        required: true
    }
}
);

const Post = mongoose.model('Posts', postsSchema)

module.exports = Post;