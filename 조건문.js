//1330
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
if (a > b) console.log('>');
else if (a < b) console.log('<');
else console.log('==');

//9498
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const a = parseInt(input[0]);
if (90 <= a) console.log('A');
else if (80 <= a) console.log('B');
else if (70 <= a) console.log('C');
else if (60 <= a) console.log('D');
else console.log('F');

//2753
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const a = parseInt(input[0]);
if (a % 4 == 0)
  if (a % 100 != 0) console.log('1');
  else if (a % 400 == 0) console.log('1');
  else console.log('0');
else console.log('0');

//14681
// fs 모듈로 하면 오류가 난다. 아직 다른 방법은 모르기 때문에 fs 버전만 작성
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a > 0)
  if (b > 0) console.log('1');
  else console.log('4');
else if (a < 0)
  if (b > 0) console.log('2');
  else console.log('3');

//2884
//이곳에서는 왜 let을 썻나면, const는 재할당이 불가! 따라서 값을 변경하지 못하기 때문에 변경할 수 있는 let 사용!
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let h = parseInt(input[0]);
let m = parseInt(input[1]);

m = m - 45;

if (m < 0)
  if (h - 1 < 0) {
    h = 23;
    m = m + 60;
  } else {
    h = h - 1;
    m = m + 60;
  }
console.log(h, m);

//2525
// 입력이 시 분 그리고 조리시간이므로 처음을 시간과 조리시간으로 나누고 시간을 시와 분으로 나눈다.
// h는 시간, m은 분, t는 조리시간 , a는 while문 이용을 위한 변수.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const time = input[0].split(' ');
let h = parseInt(time[0]);
let m = parseInt(time[1]);
let t = parseInt(input[1]);
let a = 1;
m = m + t;
while (a) {
  if (m >= 60) {
    h = h + 1;
    m = m - 60;
    if (h >= 24) h = 0;
  } else a = 0;
}
console.log(h, m);

//2480
// 이 문제에서 마지막 max를 찾는 것에서 많이 오류가 났음.
// max.sort()하면 오름차순 정리인데 max가 높은 수라고 생각하여 max*100을 했음.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

if (a == b && b == c && a == c) console.log(10000 + a * 1000);
else if (a != b || a != c || b != c)
  if (a == b || a == c) console.log(1000 + 100 * a);
  else if (b == c) console.log(1000 + 100 * b);
  else if (a != b && a != c && b != c) {
    let max = [a, b, c].sort();
    console.log(max[2] * 100);
  }
