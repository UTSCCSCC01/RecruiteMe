const { Binary } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
var imageSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    img:
    {
        data: Buffer, // Front end developers must use base64 to view image (https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)
        contentType: String
    }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = new mongoose.model('Image', imageSchema);