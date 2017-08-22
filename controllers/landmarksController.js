var db = require('../models');

  //GET all landmarks  /api/landmarks/


  function show (req, res){
    db.Landmark.find({}, function (err, allLandmarks){
      if (err){
        console.log('error getting all landmarks: ', err)
      }
      res.json(allLandmarks)
    })
  }

  // POST /api/landmarks/

  function create(req, res) {
    db.Landmark.create(req.body, function(err,landmark){
      if(err){
        console.log('error creating new landmark: ', err)
      }
      console.log ('created landmark', landmark)
      res.json(landmark)
    })
}

// DELETE a post /api/landmarks/:landmarkId
function destroy(req, res) {
  db.Landmark.findOneAndRemove({_id: req.params.landmarkId}, function (err, foundLandmark){
    if (err){
      console.log ('error deleting landmark by id: ', err)
    }
    res.json(foundLandmark)
  })
}

//GET landmarks and filter by cityId /api/cities/:cityId/landmarks/
function landmarksByCity (req, res){
  let city_id = req.params.cityId
  db.Landmark.find({_city: city_id}, function (err, cityLandmarks){
    if (err) {
      console.log ('error finding landmarks by city: ', err)
    }
      console.log(req.params.cityId)

    cityLandmarks.forEach(function(landmark){
      console.log ('landmark_city ', landmark._city)
      })

    res.json(landmarksByCity)
    })
}

//UPDATE landmarks by id /api/landmarks/:landmarkId

function update (req, res){
  console.log('updating with data: ', req.body)
  db.Landmark.findById(req.params.landmarkId, function (err, foundLandmark){
    if (err) {
      console.log ('error updating landmark: ', err)
      }
      res.json(savedLandmark)
    })

}



  module.exports = {
    show: show,
    create: create,
    update: update,
    landmarksByCity: landmarksByCity,
    destroy: destroy
  }
