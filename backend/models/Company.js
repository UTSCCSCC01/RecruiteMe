const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    createrId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    jobPosts: [{ type: Schema.Types.ObjectId, ref: 'Posts' }],
    reviews: [{
        position: String,
        review: String,
        salary: Number,
        rating: Number
    }],
}
);

const Company = mongoose.model('Company', companySchema)
module.exports = Company;