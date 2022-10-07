const { Binary } = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const jobseekerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
        type: Array,
        of: new Schema({
            company: String,
            jobTitle: String,
            startDate: String,
            endDate: String,
            description: String
        }),
        required: false
    },
    education: {
        type: Array,
        of: new Schema({
            school: String,
            program: String,
            gradDate: String
        }),
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
    },
    profilePicture: {
        type: new Schema({
            image: { // Front end developers must use base64 to view image (https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)
                data: Buffer,
                contentType: String
            }
        }),
        required: false
    },
    resume: {
        type: new Schema({
            name: String,
            binData: Buffer
        }),
        required: false
    }
}
);

const JobSeeker = mongoose.model('JobSeekers', jobseekerSchema)

module.exports = JobSeeker;