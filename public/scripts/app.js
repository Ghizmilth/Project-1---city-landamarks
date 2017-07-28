//let cityList = 0;


$(document).ready(function() {
  console.log('JS is loaded');

//This allows us to render albums on main page
  $.ajax({
    method: 'GET',
    url: '/api/cities',
    success: renderCities
  })

//click on EDIT city button
  $('#city-render').on('click', '.edit-city', handleCityEdit);
  $('#city-edit-modal').on('click', '#save-edit-city', handleEditCityButton);

  // click on an add city button
  $('.modal-nav').on('click','.btn-add-city', handleAddCityClick);

  //click on save button in add city add form

  $('#cityModal').on('click','#saveCity',handleNewCitySubmit);

  //Open Add landmark modal
  $('.modal-footer').on('click','.btn-add-landmark', handleAddLandmarkClick);

  //click on save button in add landmark form
  $('#landmarkModal').on('click','#saveLandmark', handleNewLandmarkSubmit);

});


//Edit a city
function handleCityEdit(city) {
  console.log(city);
  let $cityInfoEdit = $(city.target)
  let cityId = $cityInfoEdit.data('city-id');
  console.log('edit city', cityId);
  $.get('/api/cities/' + cityId, function(editCity){
    console.log('got back the city object', editCity);


   let cityToEdit = (`  <div class="modal fade editCityNow" tabindex="-1" role="dialog" id="editCityModal" data-city-id="${editCity._id}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Edit City</h4>
        </div>
        <div class="modal-body">

          <fieldset class='form-horizontal'>
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="cityName">City Name</label>
              <div id="cityNameInput" class="col-md-4">
                <input id="name" name="cityName" type="text" placeholder="" value="${editCity.name}" class="form-control input-md edited-city-name" required="">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="description">Description</label>
              <div class="col-md-4">
                <input id="description" name="description" type="text" placeholder="" value="${editCity.description}" class="form-control input-md edited-city-description">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="coordinates">Coordinates</label>
              <div class="col-md-4">
                <input id="coordinates" name="coordinates" type="text" placeholder="" value="${editCity.coordinates}" class="form-control input-md edited-city-coordinates">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="population">Population</label>
              <div class="col-md-4">
                <input id="population" name="population" type="text" placeholder="" value="${editCity.population}" class="form-control input-md edited-city-population">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="area">Area</label>
              <div class="col-md-4">
                <input id="area" name="area" type="text" placeholder="" value="${editCity.area}" class="form-control input-md edited-city-area">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="elevation">Elevation</label>
              <div class="col-md-4">
                <input id="elevation" name="elevation" type="text" placeholder="" value="${editCity.elevation}" class="form-control input-md edited-city-elevation">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="time_zone">Time Zone</label>
              <div class="col-md-4">
                <input id="time_zone" name="time_zone" type="text" placeholder="" value="${editCity.time_zone}" class="form-control input-md edited-city-time-zone">
              </div>
            </div>


            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="imageURL">Image URL</label>
              <div class="col-md-4">
                <input id="imageURL" name="imageURL" type="imageURL" placeholder="" value="${editCity.imageURL}" class="form-control input-md edited-city-imageURL">
              </div>
            </div>

          </fieldset>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="save-edit-city">Edit city</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal --> `)



//adds the modal into the HTML after loading the city info
 $('#city-edit-modal').prepend(cityToEdit);

//calls modal to show up
 $('#editCityModal').modal();

});
};



function handleEditCityButton (edit) {
    edit.preventDefault();
    let cityId = $(this).parents('#editCityModal').data('city-id');


    let cityData = {
      name: $(".edited-city-name").val(),
      description: $(".edited-city-description").val(),
      coordinates: $(".edited-city-coordinates").val(),
      population: $(".edited-city-population").val(),
      area: $(".edited-city-area").val(),
      elevation: $(".edited-city-elevation").val(),
      time_zone: $(".edited-city-time-zone").val(),
      imageURL: $(".edited-city-imageURL").val()
    }

      console.log('Editing this city', cityId, 'with the following info', cityData);

      $.ajax ({
        method: 'PUT',
        url: '/api/cities/' + cityId,
        data: cityData,
        success: handleCityUpdateResponse
    });
}


//This handles the update of a city after click on Edit Button
function handleCityUpdateResponse(data) {
  console.log('response to update', data);

  let cityId = data._id;
  console.log(cityId);

//  $('.editCityNow[data-city-id="'+ cityId'"]').remove();

  // close modal
    $('editCityModal').modal('hide');
    // update the correct album to show the new song

    window.location = window.location;

      renderOneCity(data);
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
              <li id="cityPopulation">Population: ${city.population}</li>
              <li id="cityArea">City Area: ${city.area}</li>
              <li id="cityElevation">Elevation: ${city.elevation}</li>
              <li id="cityTimeZone">Time-Zone: ${city.time_zone}</li>
         </ul>
       </div>
      </div>
    </div>
    <button type="button" class="btn edit-city" data-city-id="${city._id}">Edit City</button>
      <button type="button" class="btn btn-add-landmark" data-city-id="${city._id}">Add Landmark</button>
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
function handleNewCitySubmit(e) {
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

  //Post data to city list
  var cityPostToServer = '/api/cities/';

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

// when the ADD Landmark button is clicked, display the modal to display form for adding a landmark
function handleAddLandmarkClick(e) {
  console.log('add-landmark clicked!');
  $('#landmarkModal').modal();  // display the modal!
}


// when the add landmark modal submit button is clicked:
function handleNewLandmarkSubmit(e) {
  e.preventDefault();
  var $modal = $('#landmarkModal');
  var $landmarkNameField = $modal.find('#landmarkName');
  var $addressField = $modal.find('#address');
  var $landmarkImageURL = $modal.find('#landmarkImageURL');

  var dataToPost= {
    name: $landmarkNameField.val(),
    adress: $addressField.val(),
    imageURL: $landmarkImageURL.val()
  };

  //Post data
  var landmarkPostToServer = `/api/cities/${city._id}/landmarks`;

  $.post(landmarkPostToServer, dataToPost, function (data){
    console.log();

    //clear form
    $landmarkNameField.val(''),
    $addressField.val(''),
    $landmarkImageURL.val('')

  });
}
