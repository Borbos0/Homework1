function functionWithCallback(callback) {
    callback();
}
// Задание 1
function sortObject() {
    const people = [
        { name: 'Глеб', age: 29 },
        { name: 'Анна', age: 17 },
        { name: 'Олег', age: 7 },
        { name: 'Оксана', age: 47 }
    ];
    people.sort(function (a, b) {
        if (a.age > b.age) {
            return 1;
        }
        if (a.age < b.age) {
            return -1;
        }
        return 0;
    });
    console.log(people);
}
functionWithCallback(sortObject);
// Задание 2
function isPositive(num) {
    if (num > 0) {
        return num;
    }
}
function isMale(name, gender) {
    if (gender === 'male') {
        return name + gender;
    }
}
function filter(arr, rule) {
    const mas = [];
    for (let i = 0; i < arr.length; i++) {
        if (rule(arr[i])) {
            mas.push(arr[i]);
        }
    }
    return mas;
}
console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
console.log(filter(people, isMale));
// Задание 3
//let time = setInterval(() => console.log(new Date()), 3000);
//let time2 = setInterval(() => console.log('Прошло 30 секунд'), 30000);
// Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})
// Задание 5
function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond2(() => sayHi('Глеб'))