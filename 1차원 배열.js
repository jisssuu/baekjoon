//10818
//Math.(max or min).apply(Math,num)을 이용하여 num의 최대,최소를 구했다.
// 틀린 이유는 max min 출력으로 인한 것 . min max 출력이 되어야 함.
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let count = Number(input[0]);
let inputNumber = input[1].split(' ');
let num = [];
for (let i = 0; i < count; i++) {
  num[i] = inputNumber[i];
}
console.log(Math.min.apply(Math, num), Math.max.apply(Math, num));

// 2562
// Number 자체를 input에 하면 안되는 것 같다.
// 따라서 inpput[i]에 개별적으로 Number 넣어줌
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let max = input[0];
let maxLocation = 0;
for (let i = 1; i < 9; i++) {
  if (max < Number(input[i])) {
    max = Number(input[i]);
    maxLocation = i;
  }
}
console.log(max);
console.log(maxLocation + 1);

//2577
//String을 이용하여 계산하면 자리수를 바로 찾을 수 있고 위치도 배열로 찾을 수 있다. (까먹어서 찾아봄..)
//오류가 났던 이유는 num[j]==i 인데 i대신 j를 넣었다..
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let num = String(input[0] * input[1] * input[2]);
for (let i = 0; i <= 9; i++) {
  let count = 0;
  for (let j = 0; j < num.length; j++) {
    if (num[j] == i) {
      count++;
    }
  }
  console.log(count);
}
//3052
//검색을 통해 map() 함수의 의미를 알아내어 사용 => 배열에 사용 시 배열 전체에 같은 연산을 함
//map(x => x % 42) 를 넣으면 모두 42를 나눈 것의 나머지로 배열이 바뀜.
//set을 통해 중복을 제거하여 다른 나머지가 몇개인지 나타낸다. size를 이용하여 크기를 얻음. length 아님!\
let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let count = new Set(input.map((x) => x % 42)).size;
console.log(count);

//1546
//Math.max.apply(Math,배열)을 이용해 max 값 찾기.
//Map을 이용하여 max 값으로 새로운 점수를 저장.
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let count = input[0];
let number = input[1].split(' ');
let max = Math.max.apply(Math, number);
let Sejun = number.map((x) => (x / max) * 100);
let sum = 0;
for (let i = 0; i < count; i++) {
  sum += Sejun[i];
}
console.log(sum / count);

//8958
//문제를 이해하는 것에 있어서 문제가 발생..
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let count = input[0];
let answer = '';

for (let i = 1; i <= count; i++) {
  let oCount = 1;
  let sumCount = 0;
  for (let j = 0; j <= input[i].length - 1; j++) {
    if (input[i][j] == 'O') {
      sumCount += oCount;
      oCount++;
    } else {
      oCount = 1;
    }
  }
  console.log(sumCount);
}
