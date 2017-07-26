$(document).ready(function() {
  console.log('JS is loaded');

//This allows us to render albums on main page
  $.ajax({
    method: 'GET',
    url: '/api/cities',
    success: renderCities
  })

  $('#city-render').on('click', '.edit-city', handleCityEdit);




});


//Edit a city
function handleCityEdit(e) {
  
  console.log(e.target);
  let cityId = $(e.target).data('city-id');
  console.log('edit city', cityId);
};



//Render cities on HTML
function renderCities(cities) {
  cities.forEach(function(city) {
    renderOneCity(city);
  });
}

//Render One City on HTML
function renderOneCity(city) {
  console.log('rendering city', city);

  var cityHtml = (`
  <div class="row city" data-city-id="${city._id}">

    <div class="col-sm-6">
      <h2>${city.name}</h2>
      <p>${city.description}</P>
    </div>
    <div class="row"
      <div class="col-md-3 col-sx-12 thumbnail city-photo" id="city-image">
      <img src="${city.imageURL}"></img>
      </div>
    </div>

    <div class="modal-footer">
      <div class="row">
        <div class="col-md-12" id="city-facts">
          <ul>
            <li>Coordinates: ${city.coordinates}</li>
              <li>Population: ${city.population}</li>
              <li>City Area: ${city.area}</li>
              <li>Elevation: ${city.elevation}</li>
              <li>Time-Zone: ${city.time_zone}</li>
         </ul>
       </div>
      </div>
    </div>
    <button type="button" class="btn edit-city" data-city-id="${city._id}">Edit City</button>
  </div>
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
