//routes for api
const express = require('express');
const bp = require('body-parser');
const router = express.Router();
const path = require("path");
const app = express();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

router.get('/api/friends', function(req, res){
	//displays json of all friends
	console.log("ALERT: Data retreived from the friends API");
	res.json({test: "test"})
	console.log(req.body);
});

router.post('/api/friends', function(req, res){
	//incoming survey results
	//compatibility logic
	console.log("ALERT: Data posted through the friends API");
	let person = req.body;
	console.log(req.body);
});

module.exports = router;