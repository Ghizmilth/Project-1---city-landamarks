var db = require('../models');


  // POST '/api/cities/:cityId/landmarks
  function create(req, res) {


    db.City.findById(req.params.cityId, function(err, foundCity) {
      console.log('body', req.body);
      var newLandmark = new db.Landmark(req.body);  // dangerous, in a real app we'd validate the incoming data
      newLandmark.save(function(err, savedLandmark) {
        console.log('newLandmark created: ', newLandmark);
        res.json(newLandmark);  // responding with just the landmark
      });
    });
}

  module.exports = {
    create: create
  };
