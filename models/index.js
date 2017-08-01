//REQUIRE

const mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost/project1CityLandmarks")
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project1CityLandmarks" );

var City = require('./cities');

module.exports.City = City;
module.exports.Landmark = require('./landmarks');
