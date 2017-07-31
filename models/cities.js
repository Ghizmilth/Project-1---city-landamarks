const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// let Landmark = require
let CitiesSchema = new Schema({
  name: String,
  description: String,
  coordinates: String,
  population: String,
  area: String,
  elevation: String,
  latLng: {"lat": Number, "lng": Number},
  time_zone: String,
  imageURL: String
})

let City = mongoose.model('City', CitiesSchema);

module.exports = City;
