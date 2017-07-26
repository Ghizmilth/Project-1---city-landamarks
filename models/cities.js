const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// let Landmark = require
let CitiesSchema = new Schema({
  name: String,
  description: String,
  population: Number,
  size: String,
  imageURL: String
})

let City = mongoose.model('City', CitiesSchema);

module.exports = City;
