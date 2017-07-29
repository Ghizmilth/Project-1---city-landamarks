const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Landmark = require('./landmarks');

// let Landmark = require
let CitySchema = new Schema({
  name: String,
  description: String,
  coordinates: String,
  population: String,
  area: String,
  elevation: String,
  time_zone: String,
  imageURL: String,
  landmarks: [Landmark.schema]
})

let City = mongoose.model('City', CitySchema);


module.exports = City;
