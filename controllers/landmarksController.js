var db = require('../models');


  // POST '/api/cities/:cityId/landmarks
  function create(req, res) {
    db.City.findById(req.params.citiesId, function(err, foundCity) {
      console.log(req.body);
      let newLandmark = new db.Landmark(req.body);
      foundCity.landmarks.push(newLandmark);
      foundCity.save(function(err, newLandmark) {
        console.log('newLandmark created:', newLandmark);
        res.json(newLandmark);  // responding with just the landmark
      });
    });
}

  module.exports = {
    create: create
  };
