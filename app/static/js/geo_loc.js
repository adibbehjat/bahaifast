var parsed_data = null;

// Data source
$.getJSON('static/data/cities.json', function(data){
  parsed_data = JSON.parse(data);
  var cities = [];
  for(var city in parsed_data) cities.push(city);
  $("#city-selector").autocomplete({
    maxResults: 10,
    minLeght: 2,
    stringLimit: 40,
    source: function(request, response){
      // Collect the results
      var results = $.ui.autocomplete.filter(cities, request.term);

      // Trim to only maxResults
      results = results.slice(0, this.options.maxResults);

      // Trim text
      results_trimmed = [];
      for(var i in results) {
        if (results[i].length > 40) {
          results_trimmed.push(results[i].substring(0, this.options.stringLimit) + '...');
        } else {
          results_trimmed.push(results[i]);
        }
      }

      // Loop through results, and shrink text
      response(results_trimmed);
    },
  });
});

function adjust_dropdown() {
  $('.ui-autocomplete').css('width',String($('#city-selector').width())+'px');
}

$(document).ready(adjust_dropdown);
$(window).resize(adjust_dropdown);

const searchButton = document.getElementById("geolocation-button");
searchButton.addEventListener('click', findLatLng);

function findLatLng() {
  var city = $('#city-selector').val();
  coord = parsed_data[city];
  // $.get("https://api.sunrise-sunset.org/json?lat="+String(coord['lat'])+"&lng="+String(coord['lng']), function(data) {
  //   console.log(data);
  // })
}

// const $geolocateButton = document.getElementById("geolocation-button");
// $geolocateButton.addEventListener('click', geolocate);

// function geolocate() {
//   if (window.navigator && window.navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
//   } else {
//     console.log("A click occurred, but no data was collected");
//   }
// }

// function onGeolocateSuccess(coordinates) {
//   const { latitude, longitude } = coordinates.coords;
//   console.log('Found coordinates: ', latitude, longitude);
// }
  
// function onGeolocateError(error) {
//   console.warn(error.code, error.message);
//   if (error.code === 1) {
//     console.log("User said no!");
//   } else if (error.code === 2) {
//     console.log("Position unavailable");
//   } else if (error.code === 3) {
//     console.log("Request has timed out!");
//   }
// }