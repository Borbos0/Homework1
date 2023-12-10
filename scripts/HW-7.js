// Задание 1
const js = 'js';
console.log(js.toUpperCase());
// Задание 2
function newMassive(mas, str) {
    mas.forEach(el => {
        if (el.toLowerCase().includes(str.toLowerCase())) {
            console.log(el);
        }
    });
}
newMassive(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
newMassive(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
newMassive(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []
// Задание 3
const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
// Задание 4
function maxMinNumbers(mas) {
    const minValue = Math.min.apply(null, mas);
    const maxValue = Math.max.apply(null, mas);
    console.log(`Минимальное число массива ${minValue}`);
    console.log(`Максимальное число массива ${maxValue}`);
}
maxMinNumbers([52, 53, 49, 77, 21, 32]);
// Задание 5
function randomNum(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
randomNum(1, 10);
// Задание 6
function getMassive(num) {
    const mas = [];
    for (let i = 0; i < Math.floor(num / 2); i++) {
        mas.push(Math.floor(Math.random() * (num)));
    }
    console.log(mas);
}
getMassive(7);
getMassive(12);
// Задание 7
randomNum(7, 23); // Функция из задания 5
// Задание 8
const data1 = new Date("4/25/2003");
console.log(data1);
// Задание 9
function DateAfter73(Dat) {
    if (Dat === undefined) {
        currentDate = new Date();
    }
    else {
        currentDate = new Date(Dat);
    }
    currentDate.setDate(currentDate.getDate() + 73)
    console.log(currentDate);
}
DateAfter73("4/25/2003");
DateAfter73("8/11/2018");
DateAfter73(); // Текущая дата
// Задание 10
function dat(Dat) {
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Майя", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    if (Dat === undefined || Dat === NaN || Dat === null) {
        rusDat = new Date();
    }
    else {
        rusDat = new Date(Dat);
    }
    let second = rusDat.getSeconds();
    let minute = rusDat.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    const fullRusDat = "Дата: " + rusDat.getDate() + " " +
        months[rusDat.getMonth()] + " " + rusDat.getFullYear() +
        " - это " + days[rusDat.getDay()];
    const time = "Время: " + rusDat.getHours() + ":" +
        minute + ":" + second;
    console.log(fullRusDat);
    console.log(time);
}
dat(1674220924819);
dat("8/11/2018");
dat(); // Текущая дата  
// Задание 11
function gameWords() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(`Дан массив слов: ${words}`);
    const word1 = prompt("Чему равнялся первый элемент массива?");
    const word2 = prompt("Чему равнялся последний элемент массива?");
    if (word1.toLowerCase() == words[0].toLowerCase() ||
        word2.toLowerCase() == words[words.length - 1].toLowerCase()) {
        if (word1.toLowerCase() == words[0].toLowerCase() &&
            word2.toLowerCase() == words[words.length - 1].toLowerCase()) {
            alert("Вы угадали оба элемента!");
        }
        else {
            alert("Вы были близки к победе!");
        }
    }
    else {
        alert("Вы ничего не угадали");
    }
}