// 1. Функции
// Function Declaration
// function greet(name) {
//     console.log('Привет - ', name)
// }

// Function Expression                            // передается в переменную
// const greet2 = function greet2(name) {
//     console.log('Привет 2 - ', name)
// }

// greet('Лена')
// greet2('Лена')

// ?разница между Declaration и Expression, Expression передается в переменную. (Expression исполняется в порядке очереди,Declaration обращение может быть перед функцией)


// console.log(typeof greet)
// console.dir(greet)

//? 2. Анонимные функции

// (function() {                         // если завернуть скобки и добавить скобки"(function)()" интерпритатор встречает и вызывает такую функцию, вызывать ее не надо
//     console.log("111111111111111");    
// })()

//----------------------------------
// let anonym = function() {                         // если завернуть скобки и добавить скобки"(function)()" интерпритатор встречает и вызывает такую функцию, вызывать ее не надо
//     console.log("111111111111111");    
// }
// anonym()
// let anonym2 = () => console.log("222222222222222"); // c анонимной делаем стрелочную(убираем function и фигурные скобки, добавляем =>)
// anonym2()
//----------------------------------



// let counter = 0
// const interval = setInterval(function () {                    // встроеный метод в js => setInterval
//     if (counter === 10) {
//         clearInterval(interval)                               // еще есть по анологии ClearTimeout
//     }
//     else {
//         console.log(++counter)
//     }
// }, 1000)

//? 3. Стрелочные функции
// function greet(name) {
//     console.log('Привет - ', name)
// }
//
// const arААrow = (name) => {
//     console.log('Привет - ', name)
// }
//
// const arrow2 = name => console.log('Привет - ', name)
//
// arrow2('Vladilen')
//
// const pow2 = num => {
//     return num **2
// }
// // или если одна строка "const pow2 = num => num ** 2"
//
// console.log(pow2(5))

// 4 Параметры по умолчанию
// const sum = (a = 40, b = 1) => a + b     // по умолчанию = 1, если не передать параметр b то будет 1
//
// console.log(sum(12, 4))

// const sum = (a = 40, b = a * 2) => a * b
//
// console.log(sum())


// function sumAll(...all) {               // принимает неограниченое количемтво чисел и пакует их в массив
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
//
// }
//
// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// 5 Замыкания
// function createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName)
//     }
// }

// const logWithLastName = createMember('Vladilen')
// console.log(logWithLastName('Minin'))
// console.log(logWithLastName('Kuznecov'))
//-------------------------------------------------

// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n);
//     }
// }

// const calc = createCalcFunction(42)
// console.log(calc);
// calc()

// function createIncrementor(n) {
//     return function(num) {
//         return n + num
//     }
// }

// const sum = createIncrementor(1)
// console.log(sum(0));
// console.log(sum(1));
// console.log(sum(2));
// console.log(sum(3));

function urlGenerator(domein) {
    return function(url) {
        return `https://${url}.${domein}`
    }
}

const urlCom = urlGenerator('com')
const urlNet = urlGenerator('net')
console.log(urlCom('mega'));
console.log(urlCom('google'));
console.log(urlNet('ukr'));
console.log(urlNet('title'));






// function greet(name) {
//     console.log('Привет - ', name)
// }

// const greet = (name, age) => console.log('Привет', name, ',мне ', age)

// const greet = (name, age) => 6 ** 2

// console.log(greet('minin', 21));


// const num = (a, b = 0) => a + b

// console.log(num(41))

// function sumAll(...all) {
//     console.log(all)  
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }
// const res = sumAll(1,2,3,4,5,6,7,8,9)

// console.log(res);





// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, ...args)
//     }
// }

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }
// const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
// const person2 = {name: 'Елена', age: 22, job: 'Frontend'}

// bind(person1, logPerson)()
// bind(person2, logPerson)()


function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }
  
  doHomework('math', function() {
    alert('Finished my homework');
  });


