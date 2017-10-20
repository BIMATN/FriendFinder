const express = require('express');
const app = express();
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');
const bodyParser = require('body-parser');
/*-----------------------------------------------------*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', htmlRoutes);
app.use('/', apiRoutes);
/*-----------------------------------------------------*/
app.listen(3000, function(){
	console.log("Friend Finder server is listening on port 3000");
});