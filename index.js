const express = require('express');
const app = express();
const port = 4000;
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/'));

app.get("/", function(req, res){
res.sendFile(__dirname + '/index.html');
});

app.get("/calculator", function(req, res){
res.sendFile(__dirname + '/calculator.html');
});

app.post("/calculator", function(req, res){
  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);
  var bodmas = req.body.op;

  switch(bodmas){
    case "+":
      var result = number1 + number2;
      res.send("<h1> The result is : " + result);
    break;
    case "-":
    var result = number1 - number2;
    res.send("<h1> The result is : " + result);
    break;
    case "*":
    var result = number1 * number2;
    res.send("<h1> The result is : " + result);
    break;
    case "/":
    var result = number1 / number2;
    res.send("<h1> The result is : " + result);
    break;
default: console.log("operation arent available");

  }

});

app.get("/bmicalculator", function(req, res){
res.sendFile(__dirname + '/BMIcalculator.html');
});
app.post("/bmicalculator", function(req, res){
  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);

  var bmi = number1 / (number2 * number2);
    res.send("<h1> The BMI is : " + bmi);

});


app.listen(port, function(req, res){
  console.log("Server is up and Running on " + port);
});
