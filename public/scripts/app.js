$(document).ready(function() {
  console.log('JS is loaded');


$.ajax({
  method: 'GET',
  url: '/api/cities'
  success: renderCityList
})



})




function renderCity(cities[1]) {
  console.log('rendering city',city);

  var cityHTML = (`

    <section class="row">
      <article class="col-sm-6">
        <h2> San Francisco</h2>
        <p>San Francisco, San Francisco,San Francisco,San Francisco,San Francisco,San Francisco,San Francisco,San Francisco,San Francisco,San Francisco,San Francisco,San Francisco,San Francisco,</P>
        </article>
        <article class="col-sm-6" id="city-image">
          <img src="http://usa.budgettravel.ie/assets/userfiles/san-francisco-skyline-600x600.jpg"></img>
        </article>
  </section>

  <section class="modal-footer">
    <div class="row">
       <article class="col-md-12" id="city-facts">
         <p>City Facts,City Facts,City Facts,City Facts,City Facts,City Facts,City Facts,</P>
       </article>
    </div>

`);

}
