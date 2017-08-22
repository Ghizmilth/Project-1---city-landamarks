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

//Landmarks front-edn server routes
app.get('api/cities/:citiesId/landmarks', controllers.cities.index);
app.post('/api/cities/:citiesId/landmarks', controllers.cities.create);




//LISTENING

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running on localhost: 3000/');
});
