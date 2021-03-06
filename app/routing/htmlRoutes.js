//routes for html page
const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/survey', function(req, res){
	console.log("ALERT: Survey Page has been accessed by a user");
	res.sendFile(path.join(__dirname, "..", "public/survey.html"));
});

router.get('/', function(req, res){
	console.log("ALERT: Home page has been accessed by a user");
	res.sendFile(path.join(__dirname, "..", "public/home.html"));
});

module.exports = router;