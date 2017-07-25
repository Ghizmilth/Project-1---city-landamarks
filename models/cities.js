const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// let Landmark = require
let CitiesSchema = new Schema({
  cityName: String,
  description: String,
  population: Number,
  size: String,
  imageURL: String
})

let Cities = mongoose.model('Cities', CitiesSchema);

module.exports = City;
