//REQUIRE EXPRESS
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const controllers = require('./controllers');




//BASIC ROUTE

//Index page
app.get('/', function home(req,res) {
  res.sendFile('views/index.html' , { root : __dirname});
})



/*
 * JSON API Endpoints
 */

//City front-end server routes
app.get('/api', controllers.api.index);
app.get('/api/cities', controllers.cities.index);
app.get('/api/cities/:citiesId', controllers.cities.show);
app.put('/api/cities/:citiesId', controllers.cities.update);
app.post('/api/cities', controllers.cities.create);

//app.get('/api/landmarks', controllers.landmarks.index);
app.get('/api/cities/:id/landmarks', controllers.landmarks.index); //get all landmarks for a city
app.post('/api/cities/:id/landmarks', controllers.landmarks.create);// post a landmark to a city

app.delete('/api/cities/:citiesId/landmarks/landmarkId', controllers.landmarks.destroy);
app.put('/api/cities/:citiesId/landmarks/landmarkId', controllers.landmarks.update);



//LISTENING

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running on localhost: 3000/');
});
