
var Twitter = require('twitter');
 
// var client = new Twitter({
//   consumer_key: 'process.env.TWITTER_CONSUMER_KEY',
//   consumer_secret: 'process.env.TWITTER_CONSUMER_SECRET',
//   access_token_key: 'process.env.TWITTER_ACCESS_TOKEN_KEY',
//   access_token_secret: 'process.env.TWITTER_ACCESS_TOKEN_SECRET'
// });
 
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
// module.exports = {
//     client: Twitter
    
// } 
// 0
console.log('this is loaded');

exports.twitter = {
  consumer_key: 'process.env.TWITTER_CONSUMER_KEY',
  consumer_secret: 'process.env.TWITTER_CONSUMER_SECRET',
  access_token_key: 'process.env.TWITTER_ACCESS_TOKEN_KEY',
  access_token_secret: 'process.env.TWITTER_ACCESS_TOKEN_SECRET'
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


