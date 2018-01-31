max = 1000;
for (var i = 1; i <= max; i++){
  sum = 0;
  for (var x = 1; x < i; x++){
    if((i % x) == 0){
      sum += x;
      }
      }
     if (sum == i){
     console.log(sum);
    }
}
