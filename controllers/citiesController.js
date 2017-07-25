/************
 * DATABASE *
 ************/

/* hard-coded data */
var cities = [];
cities.push({
              _id: 100,
              name: 'San Francisco',
              description: 'The Downward Spiral',
              population: '1994, March 8',
              size:'231.89 sq mi',
              imageURL:'https://en.wikipedia.org/wiki/San_Francisco#/media/File:Golden_Gate_Bridge,_SF_(cropped).jpg'
            });


// GET /api/albums
function index(req, res) {
  // send back all albums as JSON
}

// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
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
