//routes for api
const express = require('express');
const app = express();
const router = express.Router();
let friends = require('../data/friends.js');

router.get('/api/friends', function(req, res){
	//displays json of all friends
	console.log("ALERT: Data retreived from the friends API");
	res.json(friends);
});

router.post('/api/friends', function(req, res){
	//incoming survey results
	console.log("ALERT: Data posted through the friends API");
	res.send(req.body);
	let person = req.body;
	console.log(person);
/*	compatibility logic
	let compatScores = [];
	for(i=0;i<friends.length;i++){
		let potFriendScore = friends[i].scores;
		let personScore = person.score;
		let finalNum=0;
		for(j=1;j<11;j++){
			let tempNum = potFriendScore[j] - personScore[j];
			let finalNum;
			finalNum += tempNum;
			compatScores.push(finalNum);
		};
	};*/
});

module.exports = router;