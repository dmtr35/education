// Numbers
const num1 = 10
const  num2 = 20
let value

// +*/-%
value = num1 + num2
value = value + 100
value += 100
// value = 5 % 2                // остаток от деления 1
value++             // увеличит значение на единицу (изменения произойдут на следуйщей строке)
value--             // уменьшит значение на единицу
++value                // увеличит значение на единицу (изменения произойдут на этой строке)
--value                // уменьшит значение на единицу (изменения произойдут на этой строке)

// неточные вычесления
value = 0.6 + 0.7                                   // 1.2999999999999998
// value = value.toFixed(1)                        // 1.3 (обрезаем до 1знака после запятой)   (String)
// value = +value.toFixed(1)                      // + переводит в number
// value = parseFloat(value.toFixed(1))          // или function parseFloat (округляет в меньшую сторону)
value = (0.6 * 10 + 0.7 * 10) / 10              // или такой вариант


// Object Math
value = Math.PI                                          // 3.141592653589793
value = Math.random()                                   // рандом число от 0 до 1 (но не включительно 1)
value = Math.round(2.4)                             // округляет число
value = Math.ceil(2.1)                             // округляет всегда в большую сторону
value = Math.floor(2.9)                           // округляет всегда в меньшую сторону
value = Math.min(2, 12, 15, 0, 12)            // передает найменьшее число из списка
value = Math.max(2, 12, 15, 0, 12)           // передает найбольшее число из списка

value = Math.random() * 10                                 // теперь выдает рандом с 1 до 10(но не включительно 10)
// value = Math.random() * 10 + 1                        // теперь выдает c 0 до 10 (но дробные)
value = Math.floor(Math.random() * 10 + 1)           // округляем в меньшую сторуну

const arr= ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green']   // есть масив
value = Math.floor(Math.random() * arr.length)



console.log(value, arr[value])
console.log(typeof value)



// --------------------------------------------------------------------------------



// задача 1. Получить число pi из Math и округлить его до 2-х знаков после точки
add = Math.PI
add = +add.toFixed(2)

console.log(add)
console.log(typeof add)

// Задача 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 5
aff = Math.max(15, 11, 16, 12, 51, 12, 13, 5)
aff2 = Math.min(15, 11, 16, 12, 51, 12, 13, 5)

console.log(aff, aff2)
aff2 = toString()
console.log(typeof aff, typeof aff2)

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до 21.

aqq = Math.random() * 21 +1
aqq = +aqq.toFixed(2)

console.log(aqq)
console.log(typeof aqq)

// Задача 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

aww = 0.6 + 0.7
aww = (0.6 * 10 + 0.7 * 10) / 10
aww = +aww.toFixed(1)

console.log(aww)
console.log(typeof aww)

// Задача 5. Получить число из строки '100$'

let aee = parseInt('100$')



console.log(aee)
console.log(typeof aee)


//------------------------------------------------------------


let val = 5.845
// val = +val.toFixed(2)
val = (Number(val.toFixed(2)))

console.log(val)
console.log(typeof val)
// console.log(Number(val))

// console.log(val)
//
// let vaa = Math.round(5.845 * 10) / 10
// console.log(vaa)

let num11 = Math.round(1.005 * 100) / 100

console.log(num11)
console.log(typeof num11)


let num22 = 12.35
console.log(num22.toFixed(1))

let problem = 0.1 + 0.2
problem = Number(problem.toFixed(1)) === 0.3
console.log(problem)

let num3 = 1.005 + Number.EPSILON
let num4 = Math.round(num3)

console.log(num3)
console.log(num4)



console.log(Number(25 + 'Privet!'))

console.log(isNaN(25 + 'Privet!'))

console.log(typeof(25 + 'Privet'))



console.log(Math.random() * 10 + 1)
console.log(Math.random())
console.log(Math.random())

console.log(Math.max(1, 1, 1))
console.log(Math.min(1, 1, 1))

let num5 = -58
console.log(Math.abs(num5))

// ---------------------------------------------------
// задача1
let numOne = 1.005 + Number.EPSILON
numOne = Math.round(numOne * 100) / 100

console.log(numOne)
console.log(typeof numOne)

// Задача2
// Получить число 135.58 из строки
let value2 = '135.58'

value2 = parseFloat('135.58')
console.log(value2)

// z3 Построить верное условное ветвление
let ttt = 58 + 'фрилансер'
if (String) {
    console.log('результат выражения NaN')
}
// задача 4 макс число
console.log(rr = Math.max(10, 58, 39, -150, 0))

// задача 5 округлить число 58,585 до 58
console.log(eee = Math.floor(58.858))

// -------------------------------------------------------------




















