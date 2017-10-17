//routes for api
const express = require('express');
const router = express.router();

router.get('/api/friends', function(req, res){
	//displays json of all friends
});

router.post('/api/friends', function(req, res){
	//incoming survey results
	//compatibility logic
});

module.exports = router;