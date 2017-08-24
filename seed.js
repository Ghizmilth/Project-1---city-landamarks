const db = require("./models");

var cityList = [];
cityList.push({
  name: "Rome",
  description:
    "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman Catholic Church, has St. Peter’s Basilica and the Vatican Museums, which house masterpieces such as Michelangelo’s Sistine Chapel frescoes.",
  coordinates: "41°54′N 12°30′E",
  population: "2,877,215",
  area: "496.3 sq mi",
  elevation: "69 ft",
  time_zone: "CET (UTC+1)",
  imageURL:
    "https://www.thetimes.co.uk/travel/s3/growthtravel-prod/uploads/2016/04/Rome-on-a-budget.jpg"
});
cityList.push({
  name: "Budapest",
  description:
    "Budapest, Hungary’s capital, is bisected by the River Danube. Its 19th-century Chain Bridge connects the hilly Buda district with flat Pest. A funicular runs up Castle Hill to Buda’s Old Town, where the Budapest History Museum traces city life from Roman times onward. Trinity Square is home to 13th-century Matthias Church and the turrets of the Fishermen’s Bastion, which offer sweeping views.",
  coordinates: "47°29′33″N 19°03′05″E",
  population: "1,759,407",
  area: "202.8 sq mi",
  elevation: "Lowest 315 ft, Highest 1,729 ft",
  time_zone: "CET (UTC+1)",
  imageURL: "http://rawlangs.com/wp-content/uploads/2014/09/Chain_Bridge.jpg"
});
cityList.push({
  name: "Tokyo",
  description:
    "Tokyo, Japan busiest capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The meny city museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
  coordinates: "35°41′N 139°41′E",
  population: "13,617,445",
  area: "844.66 sq mi",
  elevation: "130 ft",
  time_zone: "Japan Standard Time (UTC+9)",
  imageURL:
    "http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/tokyo-mud-bath-bar-mudbath0716.jpg?itok=dJ8lDXJh"
});
cityList.push({
  name: "San Francisco",
  description:
    "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It is known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.",
  coordinates: "37.7749° N, 122.4194° W",
  population: "805,523",
  area: "231.89 sq mi",
  elevation: "52 ft",
  time_zone: "Pacific Time Zone (UTC-8)",
  imageURL:
    "http://usa.budgettravel.ie/assets/userfiles/san-francisco-skyline-600x600.jpg"
});

var landmarkList = [];
landmarkList.push({
  name: "Golden Gate Bridge",
  address: "123 Main Street",
  comments: "It is an amzing experience to cross it on a bike. Hidaner",
  imageURL:
    "http://usa.budgettravel.ie/assets/userfiles/san-francisco-skyline-600x600.jpg",
  _city: "San Francisco"
});

//removing all hardcoded data and adding new one
db.City.remove({}, function(err, cities) {
  console.log("removed all cities");
  db.City.create(cityList, function(err, cities) {
    if (err) {
      return console.log("ERROR", err);
    }
    console.log("all Cities:", cities);
    console.log("created", cities.length, "cities");

    db.Landmark.remove({}, function(err, landmarks) {
      console.log("removed all landmarks");
      landmarkList.forEach(function(data) {
        var landmark = new db.Landmark({
          name: data.name,
          address: data.address,
          comments: data.comments,
          imageURL: data.imageURL,
          _city: data._city
        });
        console.log("all landmarks", data);
        console.log("created", data.length, "landmarks");
      });
    });
  });
});
