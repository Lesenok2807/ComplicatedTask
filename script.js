let num = 266219;
let arr = num.toString().split('');
let multiplies = (arr.reduce((a,b) => a*b))**3;
//let result = multiplies**3;
let result = multiplies.toString().split('')
let end = result.slice(0, 2);


console.log(end.join(''));