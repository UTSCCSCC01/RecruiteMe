const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
var resumeSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    data: Buffer
});
  
module.exports = new mongoose.model('Resume', resumeSchema);