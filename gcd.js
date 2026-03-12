let n1 = 6;
let n2 = 12;
let gcd = 1;
for (let i = 1; i <= (n1 < n2 ? n1 : n2); i++) {
  if (n1 % i == 0 && n2 % i == 0) {
    gcd = i;
  }
}
console.log(gcd);
