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

app.get('/api', controllers.api.index);
app.get('/api/cities', controllers.cities.index);
app.get('/api/cities/:citiesId', controllers.cities.show);
app.post('/api/cities', controllers.cities.create);

app.post('/api/cities/:cityId/landmarks', controllers.landmark.create);

app.put('/api/cities/:citiesId', controllers.cities.update);


//LISTENING

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running on localhost: 3000/');
});
