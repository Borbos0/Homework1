// Задание 1
let i = 0;
while (i < 2) {
    alert('Привет');
    i++;
}
// Задание 2
let j = 0;
while (j < 5) {
    j++;
    console.log(j);
}
// Задание 3
let l = 7;
while (l < 23) {
    console.log(j);
    l++;
}
// Задание 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (item in obj) {
    console.log(`${item} - зарплата ${obj[item]} долларов.`)
}
// Задание 5
let n = 1000;
let num = 0;
do {
    num++;
    console.log(`Итерация ${num}`);
    n /= 2;
} while (n > 50)
// Задание 6
let friday = Number(prompt("Введите первое число пятницы"));
if (friday > 7 || isNaN(friday)) {
    console.log(`${friday} не может быть первой пятницей в месяце!`);
}
else {
    let days = friday;
    do {
        console.log(`Сегодня пятница, ${days}-е число. Необходимо подготовить отчет.`)
        days += 7;
    } while (days < 32)
} 