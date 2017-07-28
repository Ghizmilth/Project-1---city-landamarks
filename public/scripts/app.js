//let cityList = 0;


$(document).ready(function() {
  console.log('JS is loaded');

//This allows us to render albums on main page
  $.ajax({
    method: 'GET',
    url: '/api/cities',
    success: function (data) {
      renderOneCityOnly(data);
      populateDropDownCityMenu(data);
    }
  })
  // click on an add city button
  $('.modal-nav').on('click','.btn-add-city', handleAddCityClick);

  //click on save button in add city add form
  $('#cityModal').on('click','#saveCity',handleNewCitySubmit);


//click on EDIT city button
  $('#city-render').on('click', '.edit-city', handleCityEdit);
  $('#city-edit-modal').on('click', '#save-edit-city', handleEditCityButton);

<<<<<<< HEAD

=======
// click on an ADD city button
  $('.modal-nav').on('click','.btn-add-city', handleAddCityClick);

//Add City Modal save
>>>>>>> 148b06ff4b7a4e79fec4bc818a4ef3b5293d5adf

  //Click on Add landmark modal
  $('#city-render').on('click','.btn-add-landmark',handleAddLandmarkClick);
  //save button - Landmark form
  $('#landmarkFormModal').on('click','#saveLandmark', handleNewLandmarkSubmit);

<<<<<<< HEAD
=======
  //Open Add landmark modal
  $('.landmarks-section').on('click','.btn-add-landmark', handleAddLandmarkClick);
>>>>>>> 148b06ff4b7a4e79fec4bc818a4ef3b5293d5adf


});

// when the ADD Landmark button is clicked, display the modal to display form for adding a landmark
function handleAddLandmarkClick(e) {
  console.log('Add Landmark button clicked');
  $('#landmarkFormModal').modal('show');
}


//Populate the dropdown menu for selecting cityList
function populateDropDownCityMenu(menu) {
    menu.forEach(function(menu) {
    renderDropMenu(menu);
})
  console.log(menu);
};


//Render the drop menu with city info
function renderDropMenu(menu) {
  console.log('collecting menu list');
  let dropMenu = (`
    <li class="dropMenuList"> <a href='#' onclick="renderNewCity(this)" class="menu-list-link" data-id-city="${menu._id}">${menu.name}</a</li>
    `);
    $('.dropdown-menu').append(dropMenu);
}

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

    $('#editCityModal').modal('hide');

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
    // close modal

    $("div").remove(".city");
    $("div").remove("#city-facts");
    $("div").remove(".edition-button");
    $("div").remove(".modal-footer");

    renderNewCityUpdated(data);
  };

function renderNewCityUpdated(newCity) {
  //confirm the id of the selected city
  let cityId = newCity._id;
  console.log('rendering city', cityId);
//get the information of the selected city
  $.get('/api/cities/' + cityId, function(city){
    console.log('this is the city to show now', city);
//removes current city informtion from HTML
    $("div").remove(".city");
    $("div").remove("#city-facts");
    $("div").remove(".edition-button");
    $("div").remove(".modal-footer");

//create template for rendering new city info
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
    <div class="edition-button">
    <button type="button" class="btn edit-city" data-city-id="${city._id}">Update City</button>
    </div>
  </div>
  `);

  $('#city-render').append(cityHtml);
})
}


function renderOneCityOnly(city) {
    console.log('rendering city', city);

    var oneCity = (`
    <div class="row city" data-city-id="${city[0]._id}">

      <div class="col-sm-6">
        <h2>${city[0].name}</h2>
        <p>${city[0].description}</P>
      </div>
      <div class="row"
        <div class="col-md-3 col-sx-12 thumbnail city-photo" id="city-image">
        <img src="${city[0].imageURL}"></img>
        </div>
      </div>

      <div class="modal-footer">
        <div class="row">
          <div class="col-md-12" id="city-facts">
            <ul>
              <li id="coordinatesInfo">Coordinates: ${city[0].coordinates}</li>
                <li id="cityPopulation">Population: ${city[0].population}</li>
                <li id="cityArea">City Area: ${city[0].area}</li>
                <li id="cityElevation">Elevation: ${city[0].elevation}</li>
                <li id="cityTimeZone">Time-Zone: ${city[0].time_zone}</li>
           </ul>
         </div>
        </div>
      </div>
      <div class="edition-button">
      <button type="button" class="btn edit-city" data-city-id="${city[0]._id}">Update City</button>
      </div>
    </div>
    `);

    $('#city-render').append(oneCity);
  }

//Render cities on HTML
function renderCities(cities) {
  cities.forEach(function(city) {
    renderOneCity(city);
  })
};

//Render One City on HTML
function renderNewCity(city) {
  let cityId = $(city).data('id-city');
  console.log('rendering city', cityId);

  $.get('/api/cities/' + cityId, function(city){
    console.log('this is the nity to show now', city);

    $("div").remove(".city");
    $("div").remove("#city-facts");
    $("div").remove(".edition-button");
    $("div").remove(".modal-footer");

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

    <div class="edition-button">
    <button type="button" class="btn edit-city" data-city-id="${city._id}">Update City</button>
    </div>

    <button type="button" class="btn edit-city" data-city-id="${city._id}">Edit City</button>

<<<<<<< HEAD
    <!--Begin of landmarks -->
     <section class="container" id="landmarksSection">
       <div class="row">

           Testing

       </div>
       <div class="row">
         <button type="button" class="btn btn-add-landmark" >Add Landmark</button>
       </div>
     </section>




=======
>>>>>>> 148b06ff4b7a4e79fec4bc818a4ef3b5293d5adf
  </div>





  `);

  $('#city-render').append(cityHtml);
})
}




// when the ADD CITY BUTTON is clicked, display the modal to display form for adding a city
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

  var cityDataToPost= {
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

  $.ajax({
    method: 'POST',
    url: cityPostToServer,
    data: cityDataToPost,
    success: clearCityForm
  });
  function clearCityForm (data){
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
  };
}

<<<<<<< HEAD

=======
// when the ADD Landmark button is clicked, display the modal to display form for adding a landmark
function handleAddLandmarkClick(e) {
  console.log('add-landmark clicked!');
  $('#landmarkModal').modal();  // display the modal!
};
>>>>>>> 148b06ff4b7a4e79fec4bc818a4ef3b5293d5adf


// when the add landmark modal submit button is clicked:
function handleNewLandmarkSubmit(e) {
  e.preventDefault();
  console.log('Landmark SUBMIT clicked');
  var $modal = $('landmarkFormModal');
  var $landmarkNameField = $modal.find('#landmarkName');
  var $addressField = $modal.find('#address');
  var $landmarkImageURL = $modal.find('#landmarkImageURL');

  var dataToPost= {
    name: $landmarkNameField.val(),
    adress: $addressField.val(),
    imageURL: $landmarkImageURL.val()
  };

  //Post data
  ///api/cities/:citiesId/landmarks
  $.ajax({
    method: 'POST',
    url: '/api/cities/'+cityId+'/landmarks',
    data: data,
    onSuccess: landmarkPostToServer
  })

  function landmarkPostToServer(data){
    console.log('this is the data posted to server:', data);
    //clear form
    $landmarkNameField.val(''),
    $addressField.val(''),
    $landmarkImageURL.val('')
  };
}
