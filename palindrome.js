let n = 456;
let m = n;
let reverse = "";
let oriNum = 0;
while (m !== 0) {
  let q = 0;
  q = Math.floor(m % 10);
  oriNum = oriNum * 10 + q;
  m = Math.floor(m / 10);
}
if (oriNum === n) console.log(true);
else console.log(false);
