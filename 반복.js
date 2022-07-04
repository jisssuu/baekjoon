//2739
//숫자를 출력하기 위해선 ${} 사용 , `리터럴 생각 하기 !!
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let n = parseInt(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}

//10950
// num[0]과 num[1]을 parseInt 해주지 않았기 떄문에 오류 발생.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(' ');
  console.log(parseInt(num[0]) + parseInt(num[1]));
}

// 8393
// for문 형식 생각 잘하기.. for ( ; ;)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let a = parseInt(input);
let d = 0;
for (let i = 1; i <= a; i++) {
  d = d + i;
}
console.log(d);

//15552
// 반복문 안에 console.log 넣으면 시간 초과
// 따라서 answer에 문자열로 넣어서 출력을 한다.
// answer에 넣을 때 += 기억 해내기 !
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let max = parseInt(input[0]);
let answer = '';
for (let i = 1; i <= max; i++) {
  let num = input[i].split(' ');
  answer += parseInt(num[0]) + parseInt(num[1]) + '\n';
}
console.log(answer);

//2741
// 위 문제와 같이 console.log를 for문 내부에서 사용시 시간 초과
// 따라서 위 방법과 같이 문자열로 저장 후 한번에 출력
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let max = Number(input);
let answer = '';
for (let i = 1; i <= max; i++) answer += i + '\n';
console.log(answer);

//2742
// for 문 범위 잘못 짚어서 이 방법으로 했음.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let max = Number(input);
let t = max;
let answer = '';
for (let i = 1; i <= t; i++) {
  answer += max + '\n';
  max--;
}
console.log(answer);

/*
// 이 방법아 가장 simple한 답
let answer = '';

for (let i = input; i >= 1; i--) {
    answer += i + '\n';
}

console.log(answer);
*/

// 11021
// answer 출력 시 Number 를 해주지 않아 오류 발생..
// 이유는 확실하지 않지만 숫자로 타입을 정해줘야 인정해주는 것 같다.
// 좀 더 간결하게 하기 위해 const fs = require('fs') 대신
// input에서 불러오는 것으로 변경
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let max = parseInt(input[0]);
for (let i = 1; i <= max; i++) {
  let num = input[i].split(' ');
  let answer = Number(num[0]) + Number(num[1]);
  console.log(`Case #${i}: ${Number(answer)}`);
}

// 11022
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(' ');
  console.log(`Case #${i}: ${Number(num[0])} + ${Number(num[1])} = ${Number(num[0]) + Number(num[1])}`);
}

// 2438
// 처음에는 answer = '*' +'\n' 을 생각했지만
// 위 처럼 하면 1개씩 5줄 출력
// 원하는 값은 개수를 늘리는 것
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';
for (let i = 1; i <= input; i++) {
  answer += '*';
  console.log(answer);
}

//2439
// i를 0부터 하여 결과값과 다르게 0개 ~ 4개까지 출력나왔음..
// 문제 꼼꼼히 읽기
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let num = Number(input);
let answer = '';

for (let i = 1; i <= num; i++) {
  for (let j = 0; j < num - i; j++) {
    answer += ' ';
  }
  for (let k = 0; k < i; k++) {
    answer += '*';
  }
  answer += '\n';
}
console.log(answer);

//10871
// 리스트를 이용하여 편하게 구현하는 것을 생각하자
// 리스트에 더해줄때 ' '를 안하여 틀렸으니 이 점도 주의하자!
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let input1 = input[0].split(' ');
let totalNum = Number(input1[0]);
let inputNum = Number(input1[1]);
let num = [];
let answer = [];
num = input[1].split(' ');
for (let i = 0; i < totalNum; i++) {
  if (inputNum > num[i]) answer += num[i] + ' ';
}

console.log(answer);

//10952
// i++를 if문 밑에 썻다가 두줄 이상이라 syntaxError..
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let answer = '';
let i = 0;
while (1) {
  let input1 = input[i].split(' ');
  let sum = Number(input1[0]) + Number(input1[1]);
  if (sum != 0) {
    answer += sum + '\n';
  } else {
    break;
  }
  i++;
}
console.log(answer);

//10951
// for문에서 길이 input.length-1에서 -1 안해줘서 틀렸음
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let answer = '';
for (let i = 0; i < input.length - 1; i++) {
  let input1 = input[i].split(' ');
  let sum = Number(input1[0]) + Number(input1[1]);
  answer += sum + '\n';
}
console.log(answer);

//1110
// Math.floor -> 내림이다. 아직까지 이해는 되지 않는다..
// 생각에는 num/10이 0.xxxx이런식으로 계산이 되어서 그런걸수도..?
// Math.
let input = Number(require('fs').readFileSync('dev/stdin').toString());
let num = input;
let sum = 0;
let cycle = 1;

while (1) {
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input == num) {
    break;
  } else {
    cycle++;
  }
}
console.log(cycle);
