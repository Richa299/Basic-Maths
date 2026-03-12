let n = 153;
let newNum = n;
let length = n.toString();
let sum = 0;
while (n !== 0) {
  let r = n % 10;
  r = Math.pow(r, length.length);
  sum = sum + r;
  n = Math.floor(n / 10);
}
console.log(sum === newNum);
