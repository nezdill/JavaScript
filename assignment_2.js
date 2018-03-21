function larger(x, y){
  if(x > y){
    return x;
  }
  else{
    return y;
  }
  }
console.log("The result of the larger numbers 15 and 100 is " + larger(15,100));

function average(x,y){
  return (x + y)/2;
}
console.log("The average of the numbers 80 and 50 is " + average(80,50));

function averageList(num){
  sum = 0;
  for(var i = 0; i <= num.length - 1; i++){
      sum += num[i];
    }
  return (sum / num.length);
}
var num = [75,60,100,90];
console.log ("The result of the averageList numbers are " + averageList(num));

function randNum(x,y){
 return Math.floor(Math.random()* x) + (y - x);
}
  console.log ("The result of the random number between 10 and 20 is " + randNum(10,20));

function median(a,b,c){
  median = c;
  if(a >= b && a <= c){
    median = a;
  }
  if(b >= c && b <= a){
    median = b;
  }
return median;
}
console.log("The median of the numbers -10,25, and 0 is " + median(-10,25,0));

function numberOfZeroes(){
    total = 0;
    for(var i = 0; i <= arguments.length;i++){
      if(arguments[i] === 0){
        total++;
      }
    }
    return total;
  }
  console.log("The result of calling numberOfZeroes with the values of 10, 0, 0, 0, false, true, 0, 0  is " + numberOfZeroes(10, 0, 0, 0, false, true, 0, 0));


  var letters = 0;
function cntOccurences(str){
    for(var i = 0; i <= str.length; i++){
      if(str[i] === 'a'){
        letters++;
      }
    }
    return letters;
  }
  console.log("The result of a's in the string Adrian Tillman was here " + cntOccurences("Adrian Tillman was here"));

function isPrime(n){
  var factor = 0;
  var i = 0;
  var primeList = [];
    while(i < n.length){
      for (var x = 0; x < n.length; x++){
          if(n[i] % n[x] === 0){
            factor += 1;
          }
      }
      if(factor === 2){
        primeList.push(n[i]);
        }
        i++;
        factor = 0;
      }
      return primeList;
}
var n = [1,2,3,5,7,10,12,13,15,20];

  console.log("The function isPrime ([1,2,3,5,7,10,12,13,15,20]) the only numbers prime are " + isPrime(n));
