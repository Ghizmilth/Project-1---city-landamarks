const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// let Landmark = require
let LandmarkSchema = new Schema({
  name: String,
  address: String,
  comments: String,
  imageURL: String
});

let Landmark = mongoose.model('Landmark', LandmarkSchema);

module.exports = Landmark;
