// Use 4 different methods to select the first <p> tag in the html doc

var method1 = document.getElementById("first");
var method2 = document.getElementsByClassName("special")[0];

// These dont need indicies, as they return the first found instance
var method3 = document.querySelector("#first");
var method4 = document.querySelector(".special");
