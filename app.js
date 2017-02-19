var express = require('express');
var ejs = require('ejs');

var app = express();

app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

var router = require('./routes/routes.js');

app.use('/', router);

/*app.get('/', function(req, res) {
	res.render('home', {city: '', title: '',headline: 'We believe that every city have something to say'});
});*/

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("Server started on port :" + port);
});