const express = require('express');
const app = express();
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');
const bodyParser = require('body-parser');
/*-----------------------------------------------------*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());//body parser is applied to all routes and exists at this point in the server.js file because it needs to occur before routes
app.use('/', htmlRoutes);//utilizes html routes defined by requiring routes in htmlroutes.js
app.use('/', apiRoutes);//utilizes api routes defined by requiring routes in apiroutes.js
/*-----------------------------------------------------*/
app.listen(3000, function(){
	console.log("Friend Finder server is listening on port 3000");
});