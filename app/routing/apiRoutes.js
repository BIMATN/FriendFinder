//routes for api
const express = require('express');
const router = express.Router();
const path = require("path");
const app = express();

router.get('/api/friends', function(req, res){
	//displays json of all friends
	console.log("ALERT: Friends api data retrieved by user");
	res.json()
});

router.post('/api/friends', function(req, res){
	//incoming survey results
	//compatibility logic
	console.log("ALERT: Friends api data posted by user");
	console.log(req.body);
	//console.log(res);
});

module.exports = router;