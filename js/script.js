$(document).ready(function() {
  queryURL = "http://www.omdbapi.com/?apikey=40e9cece&";

  queryURL += $.param({
    s: "happy",
    r: "json"
  });
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    var results = response;
  });
});
