let max = prompt("첫번째 숫자 입력");
let num1 = prompt("두번째 숫자 입력");
let num2 = prompt("세번째 숫자 입력");

if (num1 > max) {
    max = num1
}
if (num2 > max) {
    max = num2
}

alert(`Max값은 ${max}`)