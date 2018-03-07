// Require express
var express = require("express");

// Set up the express object
var app = express();

// Routes
app.get("/", function(req, res){
  res.send("Hi there!");
});

app.get("/bye", function(req, res){
  res.send("Goodbye!");
});

app.get("/dog", function(req, res){
  console.log("Request was made to /dog");
  res.send("Woof!");
});

// Listen to port 3000
app.listen(3000, function(){
  console.log("Server has started");
});
