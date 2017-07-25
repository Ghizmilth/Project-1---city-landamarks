/************
 * DATABASE *
 ************/

/* hard-coded data */
var cities = [];
  cities.push({
                _id: 100,
                name: 'San Francisco',
                description: 'blah blah blah',
                population: '2,000,000',
                size:'231.89 sq mi',
                imageURL:'https://en.wikipedia.org/wiki/San_Francisco#/media/File:Golden_Gate_Bridge,_SF_(cropped).jpg'
              });
  cities.push({
                _id: 101,
                name: 'Budapest',
                description: 'blah blah blah',
                population: '1,000',
                size:'13.88 sq mi',
                imageURL:''
              });


// GET /api/cities
function index(req, res) {
  // send back all cities as JSON
}

// POST /api/cities
function create(req, res) {
  // create an city based on request body and send it back as JSON
}

// GET /api/cities/:citiesId
function show(req, res) {
  // find one city by id and send it back as JSON
}

// DELETE /api/cities/:citiesId
function destroy(req, res) {
  // find one city by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/cities/:citiesId
function update(req, res) {
  // find one city by id, update it based on request body,
  // and send it back as JSON
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
