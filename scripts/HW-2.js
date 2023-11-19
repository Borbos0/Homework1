// Задание 1
let a = 10;
alert(a);
a += 10;
alert(a);
// Задание 2
const IPhone = 'Год выпуска первого iPhone 2007';
alert(IPhone);
// Задание 3
const author = 'Создатель языка JavaScript - Брендан Эйх или Айк';
alert(author);
// Задание 4
let firstNumber = 10;
let secondNumber = 2;
let result = firstNumber + secondNumber;
alert(`Сумма ${firstNumber} и ${secondNumber} = ${result}`);
result = firstNumber - secondNumber;
alert(`Разность ${firstNumber} и ${secondNumber} = ${result}`);
result = firstNumber * secondNumber;
alert(`Произведение ${firstNumber} и ${secondNumber} = ${result}`);
result = firstNumber / secondNumber;
alert(`Частное ${firstNumber} и ${secondNumber} = ${result}`);
// Задание 5
let numberFive = 5;
let secondNumber1 = 2;
let result1;
result1 = secondNumber ** numberFive;
alert(`${secondNumber1} в степени ${numberFive} = ${result1}`);
// Задание 6
let numberNine = 9;
let result2;
result2 = numberNine % secondNumber;
alert(`Остаток от денения - ${result2}`);
// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
// Задание 8
let age = Number(prompt("Сколько вам лет?"));
alert(`Вам ${age} лет`);
// Задание 9.0
let user = {
    name: 'Шарик',
    age: 8,
    isAdmin: true
};
// Задание 9.1
user["cityOfResidence"] = 'Санкт-Петербург';
// Задание 9.2
user.age = 6;
// Задание 9.3
delete user.cityOfResidence;
// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
console.log(user[info]);
// Задание 10
let info1 = prompt("Как вас зовут?");
alert(`Привет, ${info1}!`);