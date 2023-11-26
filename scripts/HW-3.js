//Задание 1
let password = 'nbmvc021';
let passInfo = prompt("Введите пароль");
if (passInfo === password) {
    alert("Пароль введен верно");
}
else {
    alert("Пароль введен неправильно");
}
//Задание 2
let c = prompt("Введите число");
if (c > 0 && c < 10) {
    alert("Верно");
}
else {
    alert("Неверно");
}
//Задание 3
let d = Number(prompt("Введите число в переменную d"));
let e = Number(prompt("Введите число в переменную e"));
if ((d || e) > 100) {
    alert("Верно");
}
else {
    alert("Неверно");
}
//Задание 4
let a = '2';
let b = '3';
let ab = Number(a) + Number(b);
alert(ab);
//Задание 5
let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert("Зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Лето");
        break;
    case 9:
    case 10:
    case 11:
        alert("Осень");
        break;
    default:
        alert("Нет такого месяца");
        break;
}
//Задание 7
let random = prompt("Пожалуйста, введите любое число");
let isNumber = !isNaN(random);
if (isNumber === false) {
    alert("Вы ввели не число");
}
else if (random % 2 === 0) {
    alert("Число четное");
}
else {
    alert("Число нечетное");
}
//Задание 8
let clientOS = navigator.clientOS;
console.log(clientOS);
console.log(window.navigator.userAgent);
//Задание 9
let clientDeviceYear;


