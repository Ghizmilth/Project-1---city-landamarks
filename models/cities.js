const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let CitySchema = new Schema ({
  name: String,
  description: String,
  population: Number,
  size: String,
  imgURL: String
});

let City = mongoose.model('City', CitySchema);


module.exports = City;
