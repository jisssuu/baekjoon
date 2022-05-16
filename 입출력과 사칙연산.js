//2557
console.log('Hello World!');

//10718
console.log('강한친구 대한육군');
console.log('강한친구 대한육군');

//10171
// 백슬래쉬(\)는 두개를 써야 한개 출력    ``를 이용해 템플릿 리터럴 형식
console.log(`\\    /\\
 )  ( ')
(  /  )
 \\(__)|`);

// 25083
// 위 10171과는 다르게 그림 내에 `가 있어서 `를 이용하여 출력 불가 따라서 ""로 하고 \n으로 줄바꿈
console.log("         ,r'\"7\nr`-_   ,'  ,/\n \\. \". L_r'\n   `~\\/\n      |\n      |");
// 1000
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);

// 1001
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a - b);

//10998
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a * b);

//1008
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a / b);

// 10869
// 1008번과는 다르게 소숫점 이하의 숫자를 나타내지 않으므로 parseInt
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

//10926
//trim()은 양 끝의 공백을 제거
const fs = require('fs');
const id = fs.readFileSync('/dev/stdin').toString().trim();
console.log(id + '??!');

//18108
//1번째 방법
const fs = require('fs');
const year = fs.readFileSync('/dev/stdin').toString().trim();
const tYear = parseInt(year);
console.log(tYear - 543);

//10430
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % b) * (b % c)) % c);

//2588
// 위 문제들의 입력과는 다르게 \n을 기준으로 입력 받음. b/10을 할 경우 실수로 나오기 때문에 각 b1,b2,b3에 parseInt 해야한다.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const b1 = parseInt(b % 10);
const b2 = parseInt((b % 100) / 10);
const b3 = parseInt(b / 100);
console.log(a * b1);
console.log(a * b2);
console.log(a * b3);
console.log(a * b);
