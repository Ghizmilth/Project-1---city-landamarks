

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/project1CityLandmarks")

let City = require('./city');

module.exports.City = City;
