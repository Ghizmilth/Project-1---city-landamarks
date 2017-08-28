var db = require("../models");

<<<<<<< HEAD
  //GET all landmarks  /api/landmarks/
  function index (req, res){
    db.Landmark.find({}, function (err, allLandmarks){
      if (err){
        console.log('error getting all landmarks: ', err)
      }
      res.json(allLandmarks)
    })
  }

  // app.POST to /api/cities/:id/landmarks
  // function create (req, res){
  //   db.City.findById(req.params.citiesId, function(err, foundCity){
  //     console.log(req.body);
  //     var newLandmark = new db.Landmark(req.body)
  //     foundCity.landmark.push(newLandmark);
  //     foundCity.save(function(err, savedCity){
  //       console.log('newLandmark created: ', newLandmark);
  //       res.json(newLandmark);
  //     });
  //   });
  // }

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
=======
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
>>>>>>> 4b34c7554426d6783e2540464d0b72f7b8293e61



// DELETE from /api/cities/:cityId/landmarks/:landmarkId
function destroy(req, res) {
<<<<<<< HEAD
  db.City.findById(req.params.cityId, function(err,foundCity){
    console.log(foundCity);
    // got the City id, now find landmark within it
    var correctLandmark = foundCity.landmarks.id(req.params.landmarkId);
    if (correctLandmark){
      correctLandmark.remove();
      // resave the city now that the landmark has been removed
      foundCity.save(function(err, saved){
        console.log('REMOVED ', correctLandmark.name, 'FROM ', saved.landmarks);
        res.json(correctLandmark);
      });
    } else {
      res.send(404);
    }
  });
}

//GET landmarks and filter by cityId /api/cities/:cityId/landmarks/
function landmarksByCity (req, res){
  let city_id = req.params.cityId
  db.Landmark.find({_city: city_id}, function (err, cityLandmarks){
=======
  db.Landmark.findOneAndRemove({ _id: req.params.landmarkId }, function(
    err,
    foundLandmark
  ) {
>>>>>>> 4b34c7554426d6783e2540464d0b72f7b8293e61
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

<<<<<<< HEAD


  module.exports = {
    index: index,
    create: create,
    update: update,
    //landmarksByCity: landmarksByCity,
    destroy: destroy
  }
=======
module.exports = {
  show: show,
  create: create,
  update: update,
  //landmarksByCity: landmarksByCity,
  destroy: destroy
};
>>>>>>> 4b34c7554426d6783e2540464d0b72f7b8293e61
