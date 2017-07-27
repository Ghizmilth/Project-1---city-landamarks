var db = require('../models');


  // POST '/api/cities/:cityId/landmarks
  function create(req, res) {
    db.City.findById(req.params.cityId, function(err, foundCity) {
      console.log(req.body);
      var newLandmark = new db.Landmark(req.body);  // dangerous, in a real app we'd validate the incoming data
      foundCity.landmarks.push(newLandmark);
      foundCity.save(function(err, savedCity) {
        console.log('newLandmark created: ', newLandmark);
        res.json(newLandmark);  // responding with just the song, some APIs may respond with the parent object (Album in this case)
      });
    });
  }


  module.exports = {
    create: create
  };
