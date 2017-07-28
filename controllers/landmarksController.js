var db = require('../models');

// app.get('/api/cities/:cityId/landmarks', controllers.albumsSongs.index);
function index(req, res) {
  db.Landmarks.findById(req.params.cityId, function(err, foundAlbum) {
    console.log('responding with landmarks:', foundCity.Landmarks);
    res.json(foundCity.Landmarks);
  });
}




  // POST '/api/cities/:cityId/landmarks
  function create(req, res) {


    db.City.findById(req.params.cityId, function(err, foundCity) {
      console.log('body', req.body);
      var newLandmark = new db.Landmark(req.body);  // dangerous, in a real app we'd validate the incoming data
      newLandmark.save(function(err, savedLandmark) {
        console.log('newLandmark created: ', savedLandmark);
        //update the city to contain the landmarks.
        //once it's updated save to database
        res.json(savedLandmark);  // responding with just the landmark
      });
    });
}

  module.exports = {
    create: create
  };
