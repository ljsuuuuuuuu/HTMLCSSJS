let a = Number(prompt("변수 a에 넣을 숫자 입력"));
let b = Number(prompt("변수 b에 넣을 숫자 입력"));

let temp = a;
a = b;
b = temp;

alert(`스와핑한 a의값 = ${a} 스와핑한 b의값 = ${b}`);