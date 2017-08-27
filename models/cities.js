const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

var Landmark = require('./landmarks');


let CitySchema = new Schema({
  name: String,
  description: String,
  coordinates: String,
  population: String,
  area: String,
  elevation: String,
  time_zone: String,
  imageURL: String,
  //landmarks: [Landmark.schema]
  
});

let City = mongoose.model('City', CitySchema);


module.exports = City;
