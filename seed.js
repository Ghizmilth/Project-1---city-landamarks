const db = require("./models");

var cityList =[];
cityList.push({
              name: 'San Francisco',
              description: 'San Francisco was founded on June 29, 1776, when colonists from Spain established Presidio of San Francisco at the Golden Gate and Mission San Francisco de Asís a few miles away, all named for St. Francis of Assisi.[9] The California Gold Rush of 1849 brought rapid growth, making it the largest city on the West Coast at the time. San Francisco became a consolidated city-county in 1856.[26] After three-quarters of the city was destroyed by the 1906 earthquake and fire,[27] San Francisco was quickly rebuilt, hosting the Panama-Pacific International Exposition nine years later.',
              population: '2,000,000',
              size: '25 sqm',
              imgURL: 'http://usa.budgettravel.ie/assets/userfiles/san-francisco-skyline-600x600.jpg'
});
citiesList.push({
              name: 'San Francisco',
              description: 'blah blah blah',
              population: '2,000,000',
              size:'231.89 sq mi',
              imageURL:'https://en.wikipedia.org/wiki/San_Francisco#/media/File:Golden_Gate_Bridge,_SF_(cropped).jpg'
            });
citiesList.push({
              name: 'Budapest',
              description: 'blah blah blah',
              population: '1,000',
              size:'13.88 sq mi',
              imageURL:'https://en.wikipedia.org/wiki/Budapest#/media/File:The_building_of_the_Hungarian_Parliament_(10890208584).jpg'
            });
citiesList.push({
              name: 'Tokyo',
              description: 'Ichi Ni San ',
              population: '1,234,5678',
              size:'3.88 sq mi',
              imageURL:'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/tokyo-mud-bath-bar-mudbath0716.jpg?itok=dJ8lDXJh'
            });



db.City.remove({}, function(err, Cities){

  db.City.create(cityList, function(err, Cities){
    if (err) { return console.log('ERROR', err); }
    console.log("all Cities:", Cities);
    console.log("created", Cities.length, "Cities");
    process.exit();
  });

});
