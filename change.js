let change = Number(prompt("금액 입력 : "));
let coin500 = parseInt(change / 500);
let coin100 = parseInt(change % 500 / 100);

alert(`금액 ${change}원은 500원 동전 ${coin500}개와 100원 동전 ${coin100}개가 필요`);