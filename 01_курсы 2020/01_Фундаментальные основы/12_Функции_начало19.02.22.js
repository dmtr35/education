// Функции









// function declaration

function sayHello(firstName = 'Default00', lastName = 'Default01') {   // можем задать значения по умолчанию
        // if (!firstName) return console.error('Error')                          // если нет firstName, прекратить функцию
        console.log(firstName, lastName)
        console.log('Hello world')
        return `Hello ${firstName} ${lastName}`            // чтобы функция возвращала результат нужно указать return
}

let res = sayHello('Denis', 'Mescheryakov')
let res2 = sayHello('Dima', 'Vivcharuk') + '!'
// let res3 = sayHello(null)                                   // null 'Default01' // null попадает в firstName
// let res4 = sayHello(null)


console.log(res)
console.log(res2)
// console.log(res3)
// console.log(res4)

//-===============================================================
// область видимости функции

let x = 10

function foo(x) {
        x = 20                  // изменяет глобальную переменную, нудно обьявить чтобы не изменяла
        // let x = 20             // если обьявляем переменную внутри функции, она локальная и не сзменяет глобальную
        console.log(x)
        return x
}

foo()

console.log(x)


//----------------------------------------------------------------

const user = {
        name: 'Denis',
        age: 30,
}

function getObj(obj) {

        obj.name = 'Den'                   // изменяем имя в нашем обьекте
}

getObj(user)                               // получаем внутри функции наш обьект
console.log(user)

//----------------------------------------------------------------------
// function expression мы не можем вызвать до ее фактического присвоения в переменную, она будет недоступна нам
//
const square = function(x) {              // отличается тем что обьявляя записываем в переменную
        return x * x;
}


(function (msg) {                  // самовызывающаяся функция
        console.log(msg)
}("Hello word"))


//================================================================






// Функции. Задачи.
// 1. Создать функцию multiply, которая будет принимать любое количество
// чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

function multiply() {
        let s = 1
        // if (arguments.length === 0) return 0
        for (let i = 0; i < arguments.length; i++)
                s *= arguments[i]
        return s

}

let zaz = multiply(2,2,2,2,2,2,2)

console.log(zaz)



// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.


function qwerty (str) {
// split -- разбивает строку на символы; reverse -- переворачивает массив; join -- собирает строку из массива.
        return str.split("").reverse().join("")

}

let reserv66 = qwerty("test")

console.log(reserv66)

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
// где каждый символ разделен пробелом и заменен на юникод-значение символа:
//
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”
//
// подсказка: для получения кода используйте специальный метод

function qwerty11 (str) {
    for (let i = 0; i < str.length; i++)
        console.log(str)
        return str.split().charCodeAt(0)

}

let reserv666 = qwerty11('hello')

console.log(reserv666)


