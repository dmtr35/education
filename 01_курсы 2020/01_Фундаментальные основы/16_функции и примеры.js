



















// function formalGreeting() {
//     console.log("How are you?");
// }
// function casualGreeting() {
//     console.log("What's up?");
// }
// function greet(type, greetFormal, greetCasual) {
//     if(type === 'formal') {
//         greetFormal();
//     } else if(type === 'casual') {
//         greetCasual();
//     }
// }
// // prints 'What's up?'
// greet('casual', formalGreeting, casualGreeting);




// пример 1
// Без функции высшего порядка
const arr1 = [1, 2, 3];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2)
}

console.log(arr2)
//------------------------------------
// С функцией высшего порядка map
const arr11 = [1, 2, 3];
const arr22 = arr11.map(function(item) {
    return item * 2;
});
console.log(arr22);
//--------// стрелочная
const arr111 = [1, 2, 3];

const arr222 = arr111.map(item => item * 2)
console.log(arr222)





//=======================================
// пример 2
// Без функции высшего порядка

const birthYear2 = [1975, 1997, 2002, 1995, 1985];
const ages2 = [];

for (let i = 0; i < birthYear2.length; i++) {
    let age = 2022 - birthYear2[i]
    ages2.push(age)
}
console.log(ages2)
// С функцией высшего порядка map

const birthYear1 = [1975, 1997, 2002, 1995, 1985];

const ages1 = birthYear1.map(function (year) {
    return 2020 - year
})
console.log(ages1)
// стрелочная
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year => 2020 - year)
console.log(ages)


//======================================================
//  создать массив, который будет содержать только совершеннолетних
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
];
const fullAge = [];
// Без функции высшего порядка
for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
        fullAge.push(persons[i])
    }
}
console.log(fullAge)
// С функцией высшего порядка filter
const persons2 = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
];
const fullAge2 = persons2.filter(persons2 => persons2.age >= 18)
console.log(fullAge2)

//=======================================================
//Допустим, нам нужно суммировать массив чисел:
// С функцией высшего порядка reduce
const arr = [5, 7, 1, 8, 4];
const summ = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 10)      // начальное значение этой функции
console.log(summ)
//-----------------------------------
//Без функции высшего порядка
const arr23 = [5, 7, 1, 8, 4];
let summ2 = 0

for(let i = 0; i < arr23.length; i++) {
    summ2 += arr23[i]
    // summ2 = summ2 + arr23[i]
}
console.log(summ2)




//=================================================
//у нас есть строчный массив, и мы хотим конвертировать его в массив integer,
// в котором каждый элемент представляет длину строки из оригинального массива.
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapDom(arr, fn) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]))
    }
    return newArray
}
let finishArray = mapDom(strArray, function (item) {
    return item.length
})


console.log(finishArray)




//===========================================
let numbers = [1,2,3,4,5,6];
function isEven(x) {
    return x % 2 === 0
}
console.log(exitBit = numbers.filter(isEven))
//===========================================
function doblT(x) {
    return x * 2
}
let dobleTop = numbers.map(doblT)

console.log(dobleTop)
//================================================
function numSum(numOne, numTwo) {
    return total = numOne + numTwo
}
let finXim = numbers.reduce(numSum, 0)
console.log(finXim)



//=======================================================
// А теперь давайте сами создадим функцию высшего порядка doWithLoading()

function start(fn) {
    console.log('подготовка файлов к уничтожению!')
    let config = fn()
    console.log('уничтожено')
    return config
}

function boot() {
    console.log('загрузка')
}

function error() {
    console.log('ошибка')
}


// let exit1 = start(boot)
let exit1 = start(error)
//==========================================================
//Замыкание
function createGenerator(prefix) {
    let index = 0
    return function generateNewID() {
        index++
        return prefix + index.toString()
    }
}

let generateNewID = createGenerator('вызов номер: ')
console.log(generateNewID())
console.log(generateNewID())
console.log(generateNewID())

//=========================================================

const too1 = [1, 2, 3, 4, 5]
function megaStar(arr, fn) {
    const too2 = []
    for (let i = 0; i < arr.length; i++) {
        too2.push(fn(arr[1]))
    }

    return too2
}

function lizer(num) {
    return num * num
}

let result = megaStar(too1, lizer)

console.log(result)
//==============================================================

let count = 0

function myCount() {
    return count++
}

console.log(myCount())
console.log(myCount())
console.log(myCount())
//===============================================================

function showAlert() {
    alert('Hello')
}

// showAlert()
//================================================================

function  rendomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// for (let i = 0; i < 5; i++) {
    // console.log(rendomInt(10, 20))
// }
//=================================================================

function year(d) {
    let today = new Date()
    let year = today.getFullYear()
    return (year - d)
}

console.log(year(1987))



//====================================================================


function hello() {
    console.log('Hello')
}
hello.hi = 123
console.log(hello.hi)

//================================================================

function pOdd() {
    console.log('odd')
}

function pEven() {
    console.log('even')
}

function  myNumber(n, odd, even) {
    if (n % 2 === 0) return even
    else return odd
}

let z = myNumber(5, pOdd, pEven)
// console.log(z)
z()

//====================================================
const w = [
    {name: 'Ivan', 'age' : 25},
    {name: 'Serg', 'age' : 35},
    {name: 'Olga', 'age' : 27},
]

let w1 = []
for (let i = 0; i < w.length; i++) {
    if (w[i].age >= 26) {
        w1.push(w[i])
    }
}
console.log(w1)
//----------------------------------------------------
w1 = w.filter(mySort)
function mySort(item) {
    if (item.age >= 26) return true
}
console.log(w1)

w1 = w.filter(item => item.age >= 26)

console.log(w1)























