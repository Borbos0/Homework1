// Задание 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) break;
}
// Задание 2
const numbers2 = [1, 5, 4, 10, 0, 3];
numbers2.forEach((element, index) => {
    if (element === 4) {
        console.log(`Индекс числа 4 = ${index}`);
    }
});
// Задание 3
let numbers3 = [1, 3, 5, 10, 20];
numbers3 = numbers3.join(' ');
console.log(numbers3);
// Задание 4
const numbers4 = [];
for (let i = 0; i < 3; i++) {
    numbers4[i] = [];

    for (let j = 0; j < 3; j++) {
        numbers4[i].push(j + 1);
    }
}
console.log(numbers4);
// Задание 5
const numbers5 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    numbers5.push(2);
}
console.log(numbers5);
// Задание 6
const numbers6 = [9, 8, 7, 'a', 6, 5];
numbers6.splice(3, 1);
console.log(numbers6.sort());
// Задание 7
const numbers7 = [9, 8, 7, 6, 5];
let answer = Number(prompt('Угадай число?'));
let correctAnswer = false;
for (let i = 0; i < numbers7.length; i++) {
    if (answer === numbers7[i]) {
        correctAnswer = true; break;
    }
}
if (correctAnswer == true) {
    alert('Угадал');
} else {
    alert('Не угадал');
}
// Задание 8
let word = 'abcdef';
word = word.split('');
word = word.reverse();
word = word.join('');
console.log(word);
// Задание 9
let numbers9 = [[1, 2, 3], [4, 5, 6]];
let secondPart = numbers9.pop();
secondPart = secondPart.join(',');
numbers9 = numbers9.join(',');
numbers9 = numbers9.concat(`,${secondPart}`);
numbers9 = numbers9.split(',');
console.log(numbers9);
// Задание 10
const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 1;
let sum = 0;
for (let i = 0; i < numbers10.length - 1; i++) {
    sum = numbers10[i] + numbers10[i + 1];
    console.log(`Значение числа ${numbers10[i]} и ${numbers10[i + 1]} равно ${sum}`)
    n += numbers10[i + 1];
    console.log(`Общая сумма ${n}`);
}
// Задание 11
let numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubles = [];
function massive(mas) {
    doubles = mas.map((num) => num ** 2);
    console.log(doubles);
}
massive(numbers11);
// Задание 12
let word2 = ['gdsgsdgsd', '  ', 'ferqwrwq', 'sdfa12314', 'wqerq', 'fwqfqwfxsv', 'vcxvads as'];
let newMas = [];
function countWords(mas) {
    for (let i = 0; i < mas.length; i++) {
        newMas.push(mas[i].length);
    }
    console.log(newMas);
}
countWords(word2);
// Задание 13
let numbers13 = [];
function filterPositive(array) {
    numbers13 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            numbers13.push(array[i]);
        }
    }
    console.log(numbers13);
}
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);
// Задание 14
function randomCount() {
    let randomMas = [];
    let nonRandomMas = [];
    for (let i = 0; i < 10; i++) {
        randomMas.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
    }
    console.log(randomMas);
    for (let i = 0; i < randomMas.length; i++) {
        if (randomMas[i] % 2 === 0) {
            nonRandomMas.push(randomMas[i]);
        }
    }
    console.log(nonRandomMas);
}
randomCount();
// Задание 15
function randomArr() {
    let randomMas = [];
    let arr = 0;
    for (let i = 0; i < 6; i++) {
        randomMas.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
    }
    console.log(randomMas);
    for (let i = 0; i < randomMas.length; i++) {
        arr += randomMas[i];
    }
    arr /= randomMas.length;
    console.log(arr);
}
randomArr();