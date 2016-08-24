var apiKey = "9c22dd0ce6d56d744e8b6128f555cb61";
var url = "http://api.openweathermap.org";
var data = "/data/2.5/weather?q=London,uk&appid=";

var request = require('request-json');
var client = request.createClient(url);

client.get(data + apiKey, function(err, res, body) {
  return console.log(body, res, err);
});

