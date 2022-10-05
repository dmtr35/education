// функции

// обьявления функции (function Declaration)

function имя(параметры) {
    // тело (код) функции
}

/*
примеры названий функции
'show...' что то показывают
'get...' возвращает значение
'calc...' что то вычисляют
'create...' что то создают
'check...' что то проверяют и возвращают логическаое

примеры
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
*/

// Функция вывода сообщения

// function showMessage() {
//     console.log('Сообщение')
// }
//
// showMessage()                          // запускаем функцию




//-------------------------------------------------------------
// Вложеность и видимость функции

function getSumm() {
    let numOne, numTwo

    function getNumOne() {
        numOne = 1
    }
    function getNumTwo() {
        numTwo = 2
    }
    getNumOne()
    getNumTwo()

    let numSum = numOne + numTwo
    console.log(numSum)
}

getSumm()
//---------------------
// параметры (аргументы)

function calcSumm(numOne = 2, numTwo = 2) {
    console.log(`Переменная numOne:${numOne}`)
    console.log(`Переменная numTwo:${numTwo}`)

    let numSumm = numOne + numTwo

    console.log(`Сумма:${numSumm}`)
}

calcSumm(5, 5)



//------------------------------------------------------------
// функции колбеки

function calcSumm2(numOne, numTwo, more, less) {
    let numSumm = numOne + numTwo

    if (numSumm > 3) {
        more()
    } else {
        less()
    }
}
function showMoreMessage() {
    console.log(`больше 3х`)
}
function showLessMessage() {
    console.log(`меньше 3х`)
}
calcSumm2(1, 1, showMoreMessage, showLessMessage)




//-------------------------------------------------------------------
// Возврат результата

function calcSumm(numOne, numTwo) {
    let numSumm = numOne + numTwo

    return numSumm                              // Возврат
    // дальше код не выполняется
}

let funcRezult = calcSumm(1, 2)
console.log(`Сумма ${funcRezult}`)



//------------------------------------------------------------------
// Рекурсия

function getSumm3(numOne, numTwo) {
    let numsumm3 = calcSumm3(numOne, numTwo)

    console.log(numsumm3)
}
function calcSumm3(numOne, numTwo) {
    return numOne * numTwo
}
getSumm3(5,5)
//-------------------------------
function calcSumm(numOne, numTwo) {
    let rezult = 1
    //умножаем rezult на numOne numTwo раз в цикле
    for (let i = 0; i < numTwo; i++) {
        rezult *= numOne
    }
    return rezult
}
console.log(calcSumm(2, 4))


// тоже самое можем записать с помошью рекурсии //
function calcSumm3(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne
    } else {
        return numOne * calcSumm3(numOne, numTwo - 1) // почему? почему оно перемножает n раз?
    }
}
console.log(calcSumm3(2, 3))
//-----------------------------------------------------------


// Функциональное выражение (Function Expression)

let showMessage = function () {       // обьявляем переменную и присваеваем функцию без имени
    console.log('Привет!')
};

showMessage()

//-----------------------

function getSumm() {
    let summ = 1 + 2
    console.log(summ)
}

let someVar = getSumm  // копируем function Declaration в переменную

someVar()
getSumm()


//-------------------------------------
getSumm()

// обьявление функции (function Declaration)
function getSumm() {
    let summ = 1 + 2
    console.log(summ)
}



// Функциональное выражение (Function Expression)
// let showMessage3 = function () {
//     console.log('Привет!')
// }
//
// showMessage3()         // можем вызвать только после создания выражения
//-----------------------------------------------------------

// 'use strict'
// if (2 > 1) {
//     function getSumm() {
//         let sum = 1 + 2
//         console.log(sum)
//     }
//     getSumm()
// }
// перепишем в Function Expression
let getSumm4

if (2 > 1) {
    getSumm4 = function () {
        let sum = 1 + 2
        console.log(sum)
    }
}
getSumm4()   // такую функцию можем вызывать из любого места



//-----------------------------------------------------------
// Функции стрелки (arrow functions)

// функциональное выражение (Function Expression)
// let имя переменной = function (параметр, ...параметр) {
//     return выражение
// }

// стрелочная функция (arrow function)
// let имя переменной =(параметр, ...параметр) => выражение

// пример однострочной стрелочной функции
let getMessage99 = (text, name) => text + ', ' + name + '!'

console.log(getMessage99('Привет', 'Вася'))
// Многострочная стрелочная функция
let getMessage = (text, name) => {
    let message = text + ', ' + name + '!'
    return message
}
console.log(getMessage('Привет', 'Вася'))

// Планирование вызова функции setTimeout и setInterval
/*
чтобы реализовать планирование сушествуют два метода:
1. setTimeout позволяет вызвать функцию один раз через опеделенный интервал времени.
2. setInterval позволяет вызывать функцию регулярно, повторяя вызов через определенный интервал времени.
*/
// setTimeout(функция или код, задержка, параметр, ...параметр)
// setInterval(ункция или код, задержка, параметр, ...параметр)

// function showMessage5(text, name) {
//     console.log(`${text}, ${name}!`)
//     // setTimeout(showMessage5,2000,'Привет', 'Вася') // замена setInterval на рекурсивный setTimeout дает более точную задержку (продуюлировать в тело функции)
//
// }
// setTimeout(showMessage5,2000,'Привет', 'Вася')



// -------------------------------------------------

// планирование setTimeout и setInterval
// function  showNumber(num) {
//     console.log(num)
//     if (num < 5) {
//         setTimeout(showNumber, 1000, ++num)     // рекурсивный setTimeout + выводим каждую секунду с новой строки увеличивая его на единицу
//     }
// }
// setTimeout(showNumber, 1000, 1)



//---------------------------------------------------
// function showNumber(num) {
//     console.log(num)
//     let timeId = setTimeout(showNumber, 1000, ++num)
//     if (num === 6) {
//         clearTimeout(timeId)       // останавливает работу setTimeout, чтобы сработало, нужно setTimeout присвоить переменной
//     }
// }
// setTimeout(showNumber, 1000, 1)
// ----------------------------------------------------


// let result = 0
// function showNumber(num) {
//     result += num
//     console.log(result)
//     if (result === 5) {
//         clearInterval(timeId)   // прекращает setInterval
//     }
// }
// let timeId = setInterval(showNumber, 1000, 1)


// ===========================================================
// Применение функций

// функция соединения строк
function createMassage(text, name) {
    return `${text}, ${name}`
}
// Функция вывода в консоль
function showMassege(message) {
    console.log(message)
}
// Обьединяющая функция, вызывает обе функции
function initMessage(text, name) {
    showMassege(createMassage(text, name))
}

initMessage('Привет', 'фрилансер')

// =========================================================

// задачи
// 1. Кто попадет в консоль первым, Вася или Коля           // Вася
// function showName() {
//     console.log('Вася')
// }
// setTimeout(showName, 0)
// console.log('Коля')
//===========================================================
// задача 2
// Верно ли вызвана функция
// shw()
// let shw = function() {
//     console.log('dfgdfg')
// }
// задача 4
// как решить проблему?
'use strict'
if (2 > 1) {
    function zxc() {
        console.log('Сообщение')
    }
}
zxc()













