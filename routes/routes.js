var express = require('express');

var router = express.Router();

router.get('/:city', function(req, res) {
	var city = req.params.city;
	var heading, title, imageCount;
	imageCount = 6;

	if(city == 'berlin'){
		title = 'Berlin';
		heading = 'Berlin is very nice cosmopolitin city';
	}

	if(city == 'newyork'){
		title = 'New York';
		heading = 'New York is very nice cosmopolitin city';
		imageCount = 2;
	}

	if(city == 'london'){
		title = 'London';
		heading = 'London is very nice cosmopolitin city'
	}

	res.render(city, {city: city, headline: heading, title: title, numberOfImages: imageCount});
});


router.get('/', function(req, res) {
	res.render('home.ejs', {city: 'Berlin', headline: 'My City', title: 'Berline', numberOfImages: 0});
});

module.exports = router;