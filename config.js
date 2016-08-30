var request = require('request-json');
var url = '';
var apiKey = '';
var data = '';

var config = module.exports = function(options)
{
	var that = this;
	url = options['url'];
	apiKey = options['apiKey'];
	data = options['data'];
}

config.prototype.get = function(data, callback)
{
   var client = request.createClient(url);

   client.get('/data/2.5/weather?q='+data+',bd&appid=' + '' +'9c22dd0ce6d56d744e8b6128f555cb61', function(err, res, body){
   	  callback(body, err);
   }); 
}