var config = require('./config');

var connection = new config({
	apiKey : "9c22dd0ce6d56d744e8b6128f555cb61",
	url    : 'http://api.openweathermap.org',
	data   : '/data/2.5/weather?q=London,uk&appid='
});

connection.get('Dhaka', function( data , error )
{
	console.log(data, "Datas", error);
});

