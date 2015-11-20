var https = require('https');
var querystring = require('querystring');
var keys = require('../apiKeys');

var tokenRequestOptions = {
	hostname: 'github.com',
	path: '/login/oauth/access_token',
	method: 'POST',
	headers: {
		accept: 'application/json'
	}
}

module.exports = function(app) {

	app.get('/api/', function(req, res) {
		var tokenRequestData = querystring.stringify({
			client_id: keys.github.clientId,
			client_secret: keys.github.clientSecret,
			code: req.query.code,
		});

		var tokenRequest = https.request(tokenRequestOptions, function(tokenResponse) {
			var data = '';
			tokenResponse.on('data', function(chunk) {
				data += chunk;
			});

			tokenResponse.on('end', function() {
				var returned = JSON.parse(data);
				res.send(returned.access_token);
			});
		});
		tokenRequest.write(tokenRequestData);
		tokenRequest.end();
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load our public/index.html file
	});
};