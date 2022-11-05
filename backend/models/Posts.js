const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    role: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    qualification: {
        type: [String],
        required: true
    },
    applicants: [
        { type: Schema.Types.ObjectId, ref: 'User' }
    ],
    numofApplicants: {
        type: Number,
        default: 0,
        required: true
    },
    recruiter: {
        type: Schema.Types.ObjectId, ref: 'Recruiter',
        required: true
    },
    isHiring: {
        type: Boolean,
        required: true
    },
    posted: {
        type: Date,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
}
);

const Post = mongoose.model('Posts', postsSchema)
module.exports = Post;
