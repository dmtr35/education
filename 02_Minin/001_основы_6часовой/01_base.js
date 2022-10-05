// 1 переменные
// variable
//var name = 'Vladilen'  // лучше не пользоваться (можно присвоить потом новое значение)
// cameCase если в переменной присутствуют два слова, то первое слово с маленькой, второе с большой буквы
// const firstName = 'Vladilen' переменная не изменяется
// let age = 26  // можно позже присвоить другое значение (number)
// const isProgrammer = true  // boolean

// console.log(firstName)
// console.log(age.toString())
// console.log(isprogrammer)

// const _ = 'private'
// const $ = 'some value'


// console.log(_)
// console.log($)

// const if = 'mkef' //err переменная if - ошибка
// const withNum5 = '5'
// const 5withNum = '5' //err нельзя начинать название переменной с цифры


// 2 Мутирование
// console.log('имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert ('имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2020
// const birtYear = 1993
//
// const age = currentYear - birtYear
//
// const a = 10
// const b = 5
//
// let c =32
// c += a // c = c + a
// c -= a
// c *= a
// c /= a

// console.log(c)
//
// console.log(a - b)
// console.log(a + b)
// console.log(a * b)
// console.log(a / b)
//
// console.log(++currentYear) // добавляет единицу перед выводом в консоль
// console.log(currentYear++) // добавляет единицу в будущее значение
// console.log(currentYear)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Vladlen'
// const age = 26
// let x
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 приоритет операторов
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020
//
// const ilFullAge = currentYear - birthYear >= fullAge
// console.log(ilFullAge)

// 6 условные операторы



// const courseStatus = 'pending' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('new готов')
// } else if (courseStatus === 'pending') {
//     console.log('new в процесе')
// } else {
//     console.log('new неполучился')
// }
//
// const num1 = 42   //number
// const num2 = '42'  //string
//
// console.log(num1 === num2)

// const isReady = false
//
// if (isReady === true) {
//     console.log('все готово')
// } else {
//     console.log('все не готово')
// }

// 7 булевая логика

// 8 функции
//
// function calclateAge(year) {
//     return 2022 - year
// }
// // const myAge = calclateAge(1993)
// // console.log(myAge)
// //
// // console.log(calclateAge(1888))
//
//
// function logInfoAbout(name, year) {
//     const age = calclateAge(year)
//
//     if (age <= 10) {
//         console.log('оставайтесь на месте, за вами выйхали')
//     } if (age <= 17) {
//         console.log('вы несовершенно летни')
//     } if (age > 0) {
//         console.log('человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     }
//
//     else {
//         console.log('я закипел, повторите еще раз')
//     }
// }
//
//
// logInfoAbout('Владилен',2014)

// 9 масивы
// const cars = ['мазда', 'мерседес', 'форд']
// const cars = new Array('мазда', 'мерседес', 'форд')


// const cars = ['мазда', 'мерседес', 'форд']
//
//
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
//
// cars[0] = 'porshe'
// console.log(cars)
// cars[4] = 'mazda'
// console.log(cars.length)

// 10 цыклы
// const cars = ['мазда', 'мерседес', 'форд', 'porshe']
// //
// // for(let i = 0; i < cars.length; i++) {
// //    const car = cars[i]
// //     console.log(car)
// // }
//
// for (let car of cars) {
//     console.log(car)
// }

// 11 обьекты

// const person = {
//     firstName: 'Vladelen',
//     lastName: 'Minin',
//     year: 1993,
//     launguages: ['Ru', 'En', 'De'],
//     hasWife: false,
//     greet: function () {
//         console.log('greet 1')
//     }
// }
// console.log(person.firstName)
// console.log(person['lastName'])
// // const key = 'launguages'
// // console.log(person.launguages)
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// console.log(person)
// person.isProgrammer = true
//
// person.greet()











