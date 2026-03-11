let n = 12345;
let reverse = "";
while (n !== 0) {
  let q = 0;
  q = Math.floor(n % 10);
  reverse = reverse + q;
  n = Math.floor(n / 10);
}
console.log(reverse);
