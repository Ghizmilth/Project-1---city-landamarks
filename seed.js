const db = require("./models");

var cityList =[];
cityList.push({
              name: 'San Francisco',
              description: 'San Francisco was founded on June 29, 1776, when colonists from Spain established Presidio of San Francisco at the Golden Gate and Mission San Francisco de Asís a few miles away, all named for St. Francis of Assisi.[9] The California Gold Rush of 1849 brought rapid growth, making it the largest city on the West Coast at the time. San Francisco became a consolidated city-county in 1856.[26] After three-quarters of the city was destroyed by the 1906 earthquake and fire,[27] San Francisco was quickly rebuilt, hosting the Panama-Pacific International Exposition nine years later.',
              population: '2,000,000',
              size: '25 sqm',
              imgURL: 'http://usa.budgettravel.ie/assets/userfiles/san-francisco-skyline-600x600.jpg'
});



/*db.City.remove({}, function(err, Cities){

  db.City.create(cityList, function(err, Cities){
    if (err) { return console.log('ERROR', err); }
    console.log("all Cities:", Cities);
    console.log("created", Cities.length, "Cities");
    process.exit();
  });

});
*/
