var db = require('../models');

// GET /api/landmarks
function index(req, res) {
  // send back all cities as JSON
    db.City.find({}, function(err, allCities) {
      console.log(allCities);
        res.json(allCities);
    });
  }
