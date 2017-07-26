$(document).ready(function() {
  console.log('JS is loaded');


  $.ajax({
    method: 'GET',
    url: '/api/cities',
    success: renderCities
  });





});

function renderCities(cities) {
  cities.forEach(function(city) {
    renderOneCity(city);
  });
}

function renderOneCity(city) {
  console.log('rendering city', city);

  var cityHtml = (`
  <section class="row" data-city-id="${city._id}">
    <article class="col-sm-6">
      <h2>${city.name}</h2>
      <p>${city.description}</P>
      </article>
      <article class="col-sm-6" id="city-image">
        <img src="${city.imageURL}" height="400" width="400"></img>
      </article>
  </section>

  <section class="modal-footer">
  <div class="row">
     <article class="col-md-12" id="city-facts">
       <ul>
       <li>Coordinates: ${city.coordinates}</li>
       <li>Population: ${city.population}</li>
       <li>City Area: ${city.area}</li>
       <li>Elevation: ${city.elevation}</li>
       <li>Time-Zone: ${city.time_zone}</li>
       </ul>
     </article>
  </div>

  <button type="button" class="btn btn-edit-city">Edit City</button>
  </section>
  `);
  $('#city-render').prepend(cityHtml);
}

// var landmarkHtml = (`
//     <div class="row album" data-album-id="${album._id}">
//
//       <div class="col-md-10 col-md-offset-1">
//         <div class="panel panel-default">
//           <div class="panel-body">
//
//
//           <!-- begin album internal row -->
//             <div class='row'>
//               <div class="col-md-3 col-xs-12 thumbnail album-art">
//                 <img src="images/800x800.png" alt="album image">
//               </div>
//
//               <div class="col-md-9 col-xs-12">
//                 <ul class="list-group">
//                   <li class="list-group-item">
//                     <h4 class='inline-header'>Album Name:</h4>
//                     <span class='album-name'>${album.name}</span>
//                   </li>
//
//                   <li class="list-group-item">
//                     <h4 class='inline-header'>Artist Name:</h4>
//                     <span class='artist-name'>${album.artistName}</span>
//                   </li>
//
//                   <li class="list-group-item">
//                     <h4 class='inline-header'>Released date:</h4>
//                     <span class='album-releaseDate'>${album.releaseDate}</span>
//                   </li>
//
//                   <li class="list-group-item">
//                     <h4 class="inline-header">Songs:</h4>
//                     ${album.songsHtml}
//                   </li>
//
//                 </ul>
//               </div>
//
//             </div>
//             <!-- end of album internal row -->
//
//             <div class='panel-footer'>
//               <div class='panel-footer'>
//                 <button class='btn btn-primary add-song'>Add Song</button>
//                 <button class='btn btn-danger delete-album'>Delete Album</button>
//                 <button class='btn btn-info edit-album'>Edit Album</button>
//                 <button class='btn btn-success save-album hidden'>Save Changes</button>
//                 <button class='btn btn-songs edit-song'>Edit Songs</button>
//               </div>
//             </div>
//
//           </div>
//         </div>
//       </div>
//     </div>
//     <!-- end one album -->
//   `);
//   $('#albums').prepend(albumHtml);
// }
//
//
//
// }
