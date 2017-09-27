var movies = ["Hunger Games", "Titanic", "Jurassic World"];


function getPosterOne() {
  // var movie = $(this).attr("data-name");
  var posterOne = "Hunger Games"
  var queryURL = "http://www.omdbapi.com/?t=" + posterOne + "&y=&plot=short&apikey=40e9cece";

  $.ajax({
      url: queryURL,
      method: "GET"
    })

.done(function(response) {

    var posterOneImg = $("<img>");
    posterOneImg.attr("src", response.Poster)
    $(".poster1").append(posterOneImg);

    })
  }
getPosterOne()


function getPosterTwo() {
  var posterTwo = "Titanic"
  var queryURL = "http://www.omdbapi.com/?t=" + posterTwo + "&y=&plot=short&apikey=40e9cece";

  $.ajax({
      url: queryURL,
      method: "GET"
    })

.done(function(response) {

    var posterTwoImg = $("<img>");
    posterTwoImg.attr("src", response.Poster)
    $(".poster2").append(posterTwoImg);

    })
  }
getPosterTwo()

function getPosterThree() {
  var posterThree = "Jurassic World"
  var queryURL = "http://www.omdbapi.com/?t=" + posterThree + "&y=&plot=short&apikey=40e9cece";

  $.ajax({
      url: queryURL,
      method: "GET"
    })

.done(function(response) {

    var posterThreeImg = $("<img>");
    posterThreeImg.attr("src", response.Poster)
    $(".poster3").append(posterThreeImg);

    })
  }
getPosterThree()
