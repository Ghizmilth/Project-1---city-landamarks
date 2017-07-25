//REQUIRE EXPRESS
const express = require('express');
app = express();

app.use(express.static('public'));

const controllers = require('./controllers');

const db = require('./models');


//BASIC ROUTE

//app.get('/', function homepage (req,res){
//  res.send('Hello World');
//});

//Index page
app.get('/', function home(req,res)){
  res.sendFile(__dirname + 'view/index.html');
}

/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);



//LISTENING

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running on localhost: 3000/');
});
