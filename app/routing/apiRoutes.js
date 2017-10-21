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
	res.send("Status: 200\nFriend Object received");
	let person = req.body;
	console.log(person);
	//compatibility logic
	let compatScores = []; //Holds compatibility scores for each individual on my site
	//For loops through each object in my friends array, where each object is a friend
	for(let i=0;i<friends.length;i++){
		let potFriendScore = friends[i].scores; //For each object/friend I will create a score array to use for parsing
		let personScore = person.scores; //For my user I will create a vaiable with their score
		let finalNum=0; //I initialize a variable to hold the final number that will be sent to the compatScores array
		//For loops through each array index of the score values for my user and for the current friend being tested
		for(let j=1;j<10;j++){
			let tempNum = potFriendScore[j] - personScore[j]; //Create a variable that holds the sum of the array position values being compared
			finalNum += Math.abs(tempNum); //Add the absolute value of the tempNum variable to the final Num variable to increment the total value
		};
		compatScores.push(finalNum); //push the final num total value to the compat scores array for comparison with other friends to eventually find most compatible
	};
	console.log(compatScores);
	//code for finding lowest value in compatScores array and returns index array position which will be synonymous with index array position of friends object
	let closestMatch = Math.min(compatScores);
	console.log(closestMatch);
});

module.exports = router;