var db = require("../models");

//GET all landmarks  /api/landmarks/

function show(req, res) {
  db.Landmark.find({}, function(err, allLandmarks) {
    if (err) {
      console.log("error getting all landmarks: ", err);
    }
    res.json(allLandmarks);
  });
}

//POST landmarks and filter by cityId /api/cities/:cityId/landmarks/
function create(req, res) {
  //let city_id = req.params.cityId
  db.City.findById(req.params.citiesId, function(err, cityLandmarks) {
    console.log("error finding landmarks by city:", err);
    var newLandmark = new db.Landmark(req.body);
    cityLandmarks.landmarks.push(newLandmark);
    cityLandmarks.save(function(err, savedLandmark) {
      console.log("new landmark created", newLandmark);
      res.json(newLandmark);
    });
  });
}

// POST /api/landmarks/

// function create(req, res) {
//   db.Landmark.create(req.body, function(err, landmark) {
//     if (err) {
//       console.log("error creating new landmark: ", err);
//     }
//     console.log("created landmark", landmark);
//     res.json(landmark);
//   });
// }

// DELETE a post /api/landmarks/:landmarkId
function destroy(req, res) {
  db.Landmark.findOneAndRemove({ _id: req.params.landmarkId }, function(
    err,
    foundLandmark
  ) {
    if (err) {
      console.log("error deleting landmark by id: ", err);
    }
    res.json(foundLandmark);
  });
}

//UPDATE landmarks by id /api/landmarks/:landmarkId

function update(req, res) {
  console.log("updating with data: ", req.body);
  db.Landmark.findById(req.params.landmarkId, function(err, foundLandmark) {
    if (err) {
      console.log("error updating landmark: ", err);
    }
    res.json(savedLandmark);
  });
}

module.exports = {
  show: show,
  create: create,
  update: update,
  //landmarksByCity: landmarksByCity,
  destroy: destroy
};
