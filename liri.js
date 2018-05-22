require("dotenv").config();


var importKeys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request')
  ;


var spotify = new Spotify(importKeys.spotify);
var client = new Twitter(importKeys.twitter);

//  `my-tweets`

//  * `spotify-this-song`

//  * `movie-this`

//  * `do-what-it-says
var userAction = process.argv[2];
var userTitle = process.argv.slice(3).join("+");

var defaultSong;
var defaultMovie;

if (userTitle === "") {
  defaultSong = "The+Sign";
  defaultMovie = "Mr+Nobody"

} else {
  defaultSong = userTitle;
  defaultMovie = userTitle;
}


switch (userAction) {
  case "my-tweets":
    myTweets();
  case "spotify-this-song":
    spotifySearch(defaultSong);
  case "movie-this":
    movieFnctn(defaultMovie);
}


function myTweets() {


  var params = { screen_name: 'lesley_banadzem' };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log('-------------')
        console.log("My tweets: " + tweets[i].text)
        console.log('Created date: ' + tweets[i].created_at)
      }
    }
  });
}

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

function spotifySearch(song) {
  console.log(song)
  spotify.search({
    type: "track",
    query: song
  },
    function (error, data) {
      if (error) {
        return console.log("error occured: " + error);
      }
      console.log(JSON.stringify(data, null, 2))
      console.log("---------------------");
      console.log("Artist: " + data.tracks.items[0].artists[0].name)
      console.log("Track: " + data.tracks.items[0].name)
      console.log("Preview-link: " + data.tracks.items[0].preview_url)
      console.log("Album: " + data.tracks.items[0].album.name)
    })
}

function movieFnctn(movie) {

  // Then run a request to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  // console.log(queryUrl);

  request(queryUrl, function (error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

      // * Title of the movie.
      // * Year the movie came out.
      // * IMDB Rating of the movie.
      // * Rotten Tomatoes Rating of the movie.
      // * Country where the movie was produced.
      // * Language of the movie.
      // * Plot of the movie.
      // * Actors in the movie.

      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      var result = JSON.parse(body)
      console.log("Title: " + result.Title);
      console.log("Release Year: " + result.Year);
      console.log("IMB Rating: " + result.imdbRating);
      console.log("Rotten Tomatoes: " + result.Ratings[1].Value);
      console.log("Country: " + result.Country);
      console.log("Language: " + result.Language);
      console.log("Plot: " + result.Plot);
      console.log("Actors: " + result.Actors);

    }
  });
}
// update my switch statement and add add the do what it says action 
// define do what it says function
// do a .split(",")
// index [0] to user actiion and index [1] to userTitle 
// run the function again 