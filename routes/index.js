const router = require('express').Router();
const Promise = require('bluebird');
const Hotel = require('../models').Hotel;
const Activity = require('../models').Activity;
const Restaurant = require('../models').Restaurant;

router.get('/', function(req, res, next) {
	var allHotels = Hotel.findAll();
	var allRestaurants = Restaurant.findAll();
	var allActivities = Activity.findAll();
	Promise.all([allHotels,allRestaurants,allActivities]).spread(function(hotels,restaurants,activities){
		res.render('index', {hotels: hotels,restaurants: restaurants,activities: activities});


	}).catch(next);

 });

module.exports = router;