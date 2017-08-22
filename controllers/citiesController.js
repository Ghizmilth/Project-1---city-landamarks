/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/cities
function index(req, res) {
  // send back all cities as JSON
    db.City.find({}, function(err, allCities) {
      console.log(allCities);
        res.json(allCities);
    });
  }


// POST /api/cities
function create(req, res) {
  // create an city based on request body and send it back as JSON
  console.log('body', req.body);

  db.City.create(req.body, function(err, city) {
    if (err) { console.log('error', err); }
    console.log(city);
    res.json(city);
  });

}

// GET /api/cities/:citiesId
function show(req, res) {
    db.City.findById(req.params.citiesId, function(err, foundCity) {
      if(err) {console.log('cityControllers.show error', err); }
      console.log('citiesControllers.show responding with', foundCity);
      res.json(foundCity);
    })// find one city by id and send it back as JSON
}


// PUT or PATCH /api/cities/:citiesId
function update(req, res) {
  // find one city by id, update it based on request body,
  //console.log('updating with data', req.body);
  db.City.findById(req.params.citiesId, function(err, foundCity) {
    if(err) {console.log('cityControllers.update error', err);}

    foundCity.name = req.body.name;
    foundCity.description = req.body.description;
    foundCity.coordinates = req.body.coordinates;
    foundCity.population = req.body.population;
    foundCity.area = req.body.area;
    foundCity.elevation = req.body.elevation;
    foundCity.time_zone = req.body.time_zone;
    foundCity.imageURL = req.body.imageURL;

    foundCity.save(function(err, savedCity) {
      if(err) {console.log('saving updated city has failed'); }
     res.json(savedCity);
    })
  })

}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
//  destroy: destroy,
  update: update
};
