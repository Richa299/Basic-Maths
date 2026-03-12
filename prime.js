let n = 13;
let count = 0;
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    count++;
    break;
  }
}
if (count == 0) console.log("prime");
else console.log("not prime");
