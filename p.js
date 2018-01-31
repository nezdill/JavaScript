var n = [1,2,3,5,7,10,12,13,15,20];
function isPrime(n){
for(var i = 1; i <= n.length - 1;i++){
    var total = 0;
    if(n[i] % i === 0){
      total += n[i];
      }
      }
      return total;
        }

console.log("The "+ isPrime(n));
