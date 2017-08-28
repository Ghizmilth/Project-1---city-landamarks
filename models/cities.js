const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Landmark = require("./landmarks");

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
<<<<<<< HEAD

=======
>>>>>>> 4b34c7554426d6783e2540464d0b72f7b8293e61
});

let City = mongoose.model("City", CitySchema);

module.exports = City;
