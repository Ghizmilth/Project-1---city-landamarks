//REQUIRE

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/project1CityLandmarks")


module.exports.City = require('./cities');
