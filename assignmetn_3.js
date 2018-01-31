//function displaying the welcome message
function displayWelcome(){
console.log("This program will determine the time to pay off a credit card and the interest paid based on the current balance, the interest rate, and the monthly payments made.")
}

//this function calculate minimum payment
function calculateMinPayment(balance, minimumPayPercentage){
return Math.max(20, balance * minimumPayPercentage);
}

//this function displays the actual payment schedule
function displayPayments(balance, interest, minimumPay){
console.log("Your current balance is: $" + balance.toFixed(2))
console.log("Your interest rate is: " + (interest * 100) + "%")
console.log("Your minimum payment is: $" + minimumPay)
console.log("\nYear Balance Payment # Interest Paid")
var year = 1;
var interestPaid = 0;

while(balance > 0){
interestPaid += balance * interest/12;
balance = Math.max(0, balance - ( minimumPay - balance * interest/12));
console.log(year + " " + balance.toFixed(2) + " " + interestPaid.toFixed(2));
year++;
}
}

//Global varibles
var currentBalance = 1500;
var minimumPayPercentage = 0.02;
var interest = 0.18;

//Calling functions
displayWelcome()
var minimumPay = calculateMinPayment(currentBalance, minimumPayPercentage);
displayPayments(currentBalance, interest, minimumPay);
