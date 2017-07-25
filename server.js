//REQUIRE EXPRESS
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

const controllers = require('./controllers');




//BASIC ROUTE

//Index page
app.get('/', function home(req,res) {
  res.sendFile(__dirname + '/views/index.html');
})

/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);
app.get('/api/cities', controllers.cities.index);


//LISTENING

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running on localhost: 3000/');
});
