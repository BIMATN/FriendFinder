//routes for html page
const express = require('express');
const bp = require('body-parser');
const router = express.Router();
var path = require("path");
const app = express();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

router.get('/survey', function(req, res){
	console.log("ALERT: Survey Page has been accessed by a user");
	res.sendFile(path.join(__dirname, "..", "public/survey.html"));
});

router.get('/', function(req, res){
	console.log("ALERT: Home page has been accessed by a user");
	res.sendFile(path.join(__dirname, "..", "public/home.html"));
});

module.exports = router;