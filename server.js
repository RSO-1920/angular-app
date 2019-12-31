const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/angular-build'));
app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
});
// Start the app by listening on the default Heroku port

console.log("PROCCESS PORT: ", process.env.PORT);
console.log("server running on: ", process.env.PORT || 8080);

app.listen(process.env.PORT || 8080);
