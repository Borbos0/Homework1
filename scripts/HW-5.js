//Задание 1
function lowerNum(a, b) {
    if (a > b) {
        return console.log(`${a} больше ${b}`);
    } if (a !== b) {
        console.log(`${b} больше ${a}`);
    } else {
        console.log(`${a} равно ${b}`);
    }
}
lowerNum(8, 4);
lowerNum(6, 6);
lowerNum(4, 6);
//Задание 2
function equal(a) {
    if (a % 2 === 0) {
        return console.log("Число четное");
    }
    console.log("Число нечетное");
}
equal(100);
equal(101);
//Задание 3.1
function squareLog(a) {
    console.log(`Квадрат числа ${a} равно ${a ** 2}`);
}
squareLog(5);
//Задание 3.2
function squareUser(a) {
    alert(`Квадрат числа ${a} равно ${a ** 2}`);
}
squareUser(5);
//Задание 4
function userAge() {
    let userAge = Number(prompt("Сколько вам лет"));
    if (userAge < 0 || isNaN(userAge)) {
        return alert("Вы ввели неправильное значение");
    } if (userAge < 13) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}
userAge();
//Задание 5
function prodNumbers() {
    let a = Number(prompt("Введите первое число"));
    let b = Number(prompt("Введите второе число"));
    if (isNaN(a) || isNaN(b)) {
        return console.log("Одно или оба значения не являются числом");
    } else {
        console.log(`Произведения числа ${a} и ${b} равно ${a * b}`);
    }
}
prodNumbers();
//Задание 6
function prodNumber() {
    let a = Number(prompt("Введите число"));
    if (isNaN(a)) {
        return console.log("Переданный параметр не является числом");
    }
    console.log(`${a} в кубе равняется ${a ** 2}`);
}
prodNumber();
//Задание 7
let square1 = {
    radius: 4,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

let square2 = {
    radius: 7,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

function getRectangleArea() {
    return this.radius * this.radius * 3.14;
}

function getRectanglePerimeter() {
    return this.radius * 3.14 * 2;
}

console.log(square1.getArea());
console.log(square1.getPerimeter());
console.log(square2.getArea());
console.log(square2.getPerimeter());