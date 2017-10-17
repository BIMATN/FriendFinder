const express = require('express');
const path = require('path');
const app = express();
app.use(require('./app/routing/apiRoutes'));
app.use(require('./app/routing/htmlRoutes'));

app.listen(3000, function(){
	console.log("Friend Finder server is listening to port 3000");
	// console.log(__dirname+'/app/public');
});
