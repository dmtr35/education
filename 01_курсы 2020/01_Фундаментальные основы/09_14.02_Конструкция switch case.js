







// Тернарные операторы
// let a = 1
// let b = 0

// if (a > 0) {
//     b = a
// } else {
//     b += 1
// }

// console.log(b)
//---------------------------------------------
// Тернарные операторы (для простых задач)
// выражение ? если true : если false
let a = 1
let b = 0

b = a > 0 ? a : b + 1               // b = если а больше 0, то b = a,  иначе b + 1

// выражение ? если true : выражение ?  если true : если false
b = a > 0 ? 2 : a < 0 ? 3 : 0

console.log(`b: ${b}`)

// Конструкция switch case

let color = 'red'

switch (color) {
    case 'yellow':                             // кейсы. значения которые мы предполагаем равна эта переменная
        console.log('Color is yellow')
        break                                  // прерывает выполнение кейсов
    case 'red':
    case 'orange':
        console.log('Color is orange || red')
        break
    default:
        console.log('Default')
}


//=========================================================================


let userType = 'admin'

switch (userType) {
    case 'admin':
        console.log('userType')
        break
    case 'user':
    case 'guest':
        console.log('user')
        break
    default:
        console.log('without any changes')

}



//----------------------------------------------------------------------
//Тернарный оператор. Switch case. Задачи
// Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
//Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
// Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.
let a = 'block'
switch (a) {
    case 'block':
        console.log('block')
        break
    case 'none':
        console.log('none')
        break
    case 'inline':
        console.log('inline')
        break
    default:
        console.log('other')

}



















