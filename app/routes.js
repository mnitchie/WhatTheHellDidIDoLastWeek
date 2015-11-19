module.exports = function(app) {

	app.get('/api/', function(req, res) {
		res.send("Go away!");
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load our public/index.html file
	});
};