const express = require('express');
const app = express();

app.use(require('./app/routing/apiRoutes'));
app.use(require('./app/routing/htmlRoutes'));

app.listen(3000, function(){
	console.log("Friend Finder server is listening on port 3000");
});
