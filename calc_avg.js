var testA = 100;
var testB = 95;
var testC = 100;

var testAvg = (testA + testC + testB) / 3

var msg = "Congrats, you scored higher than 95%";
if (testAvg > 95)
{
  console.log(msg);
}
console.log("You average test score is: " + testAvg.toFixed(2) + "%");
