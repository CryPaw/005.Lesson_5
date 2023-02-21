let num1 = prompt('Перше число');
num1 = Number(num1);

let num2 = prompt('Друге число');
num2 = Number(num2);

let operator = prompt('Оператор (/,+,*,-)');

let e = num1 + num2;
let f = num1 - num2;
let g = num1 / num2;
let h = num1 * num2;

let a = num1 + '+' + num2 + '=' + e;
let b = num1 + '-' + num2 + '=' + f;
let c = num1 + '/' + num2 + '=' + g;
let d = num1 + '*' + num2 + '=' + h;

switch (operator) {
    case '+':
        alert (a);
        break;
    case '-':
        alert (b);
        break;
    case '/':
        alert (c);
        break;
    case '*':
        alert (d);
}