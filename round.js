var i = [365, 12.258, 996]
var j = [7, 23, 4]


for (var counter = 0; counter < i.length; counter ++){

  next_multiple = i[counter] + j[counter] - i[counter] % j[counter];
  console.log(next_multiple);
}
