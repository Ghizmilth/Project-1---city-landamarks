let cityList = 0;

$(document).ready(function() {
  console.log('JS is loaded');

//This allows us to render albums on main page
  $.ajax({
    method: 'GET',
    url: '/api/cities',
    success: renderCities
  })

  $('#city-render').on('click', '.edit-city', handleCityEdit);


  // click on an add city button
  $('.modal-nav').on('click','.btn-add-city', handleAddCityClick);

  //click on save button in add form

  $('#cityModal').on('click','#saveCity',handleNewCitySongSubmit)

});


//Edit a city
function handleCityEdit(e) {
  console.log(e.target);
  let city = $(e.target).data('city-id');
  console.log('edit city', city);

  let cityToEdit = (`  <div class="modal fade" tabindex="-1" role="dialog" id="editCityModal" data-city-id="${city._id}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Add City</h4>
        </div>
        <div class="modal-body">

          <fieldset class='form-horizontal'>
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="cityName">City Name</label>
              <div class="col-md-4">
                <input id="name" name="cityName" type="text" placeholder="" val="${city.name}" class="form-control input-md" required="">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="description">Description</label>
              <div class="col-md-4">
                <input id="description" name="description" type="text" placeholder="${city.description}" class="form-control input-md">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="coordinates">Coordinates</label>
              <div class="col-md-4">
                <input id="coordinates" name="coordinates" type="text" placeholder="${city.coordinates}" class="form-control input-md">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="population">Population</label>
              <div class="col-md-4">
                <input id="population" name="population" type="text" placeholder="${city.population}" class="form-control input-md">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="area">Area</label>
              <div class="col-md-4">
                <input id="area" name="area" type="text" placeholder="${city.area}" class="form-control input-md">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="elevation">Elevation</label>
              <div class="col-md-4">
                <input id="elevation" name="elevation" type="text" placeholder="${city.elevation}" class="form-control input-md">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="time_zone">Time Zone</label>
              <div class="col-md-4">
                <input id="time_zone" name="time_zone" type="text" placeholder="${city.time_zone}" class="form-control input-md">
              </div>
            </div>


            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="imageURL">Image URL</label>
              <div class="col-md-4">
                <input id="imageURL" name="imageURL" type="imageURL" placeholder="${city.imageURL}" class="form-control input-md">
              </div>
            </div>

          </fieldset>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="saveCity">Edit city</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal --> `)

  $('#city-edit-modal').prepend(cityToEdit);
  $('#editCityModal').modal();
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
            <li id="coordinatesInfo">Coordinates: ${city.coordinates}</li>
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



//hi

// when the ADD CITY button is clicked, display the modal to display form for adding a city
function handleAddCityClick(e) {
  console.log('add-city clicked!');
  $('#cityModal').modal();  // display the modal!
}


// when the add city modal submit button is clicked:
function handleNewCitySongSubmit(e) {
  e.preventDefault();
  var $modal = $('#cityModal');
  var $cityNameField = $modal.find('#cityName');
  var $descriptionField = $modal.find('#description');
  var $coordinatesField = $modal.find('#coordinates');
  var $populationField = $modal.find('#population');
  var $areaField = $modal.find('#area');
  var $elevationField = $modal.find('#elevation');
  var $time_zoneField = $modal.find('#time_zone');
  var $imageURL = $modal.find('#imageURL');

  var dataToPost= {
    name: $cityNameField.val(),
    description: $descriptionField.val(),
    coordinates: $coordinatesField.val(),
    population: $populationField.val(),
    area: $areaField.val(),
    elevation: $elevationField.val(),
    time_zone: $time_zoneField.val(),
    imageURL: $imageURL.val()
  };

  var cityPostToServer = '/api/cities/';
  //Post data to city list

  $.post(cityPostToServer, dataToPost, function (data){
    console.log('received data from post to /cities:', data);

    //clear form
    $cityNameField.val('');
    $descriptionField.val('');
    $coordinatesField.val('');
    $populationField.val('');
    $areaField.val('');
    $elevationField.val('');
    $time_zoneField.val('');
    $imageURL.val('');
  });
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
