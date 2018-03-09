// Require express
var express = require("express");

// Set up the express object
var app = express();

// Routes

app.get("/", function(req, res){
  res.send("Hello! Welcome to my express assignment");
});

app.get("/speak/:animal", function(req, res){
  var sounds = {
    pig: "OINK!",
    cow: "MOO!",
    dog: "WOOF!",
    bird: "CHEEP CHEEP!"
  };

  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];

  res.send("The " + animal + " goes " + sound);
});

app.get("/repeat/:string/:num", function(req, res){
  var num = Number(req.params.num);
  var string = req.params.string;
  var outputString = "";

  for (var i = 0; i < num; i++){
    outputString += (string) + " ";
  }

  res.send(outputString);
});

app.get("*", function(req, res){
  res.send("Sorry, page not found!");
});

// Listen to port 3000
app.listen(3000, function(){
  console.log("Server has started");
});
