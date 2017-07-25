$(document).ready(function() {
  console.log('JS is loaded');


$.ajax({
  method: 'GET',
  url: '/api/cities'
  success: renderCityList
})



})




function renderCityList(data) {
  console.log('data JSOn received');
  
}
