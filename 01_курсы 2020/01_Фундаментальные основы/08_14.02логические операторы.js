// Операторы сравнения и логические операторы
// Cравнения
// >, <, >=, <=, ==, ===, /=, /== все эти операторы будут возвращать true или false

let value

value = 1 > 2                  // false
value = 1 <= 2                 // true
value = 2 <= 2                 // true
value = 1 == 1                 // true
value = 1 == '1'               // true  // проверка на равенство
value = 1 == true              // true  // равна 1, поэтому true
value = 1 === '1'              // false // не равны по типу
value = 1 != '1'               // false // единица не равна единице строке? преобразовывает в число и равно.
value = 1 !== '1'              // true  // потому что не равны по типу
value = 'a' > 'a'              // false // потому что они равны
value = 'a' > 'b'              // false // b дальше по алфавиту, поэтому больше
value = 'a' === 'a'            // true
value = 'a' > 'A'              // true  // маленький регистр имеет преимущество перед большим
value = 'a' > 'ab'             // false // больше символов - больше
value = 'a'.charCodeAt()       // 97    // посмотреть к какому юникоду относится какой символ
value = 'A'.charCodeAt()       // 65    //


console.log(value)


// Условия (if, else) и логические операторы

// if (условие) {
//     // код который выполнится, если условия будут правдивы
// } else {
//     // если условия не выполнится, то можно добавить необязательную конструкцию else
// }

value = 10

if (value === 10) {
    console.log('value === 10')                          // value === 10
} else {
    console.log('else')
}
//--------------------------------
value = 10

if (value) {                          // что подразумевается что есть value?  это значит что оно не undefined, не NaN, не null, не пустая строка
    console.log('some actions', value)                          // some actions 10 // value true
} else {
    console.log('else', value)
}
//---------------------------------
value = null

if (value) {                          // что подразумевается что есть value?  это значит что оно не undefined, не NaN, не null, не пустая строка
    console.log('some actions', value)
} else {
    console.log('else', value)                                    // else null // value null, значит false
}
//---------------------------------
value = ''

if (value) {                          // что подразумевается что есть value?  это значит что оно не undefined, не NaN, не null, не пустая строка
    console.log('some actions', value)
} else {
    console.log('else', value)                                    // else // value пустая строка, значит false
}
//---------------------------------
value = undefined

if (value) {                          // что подразумевается что есть value?  это значит что оно не undefined, не NaN, не null, не пустая строка
    console.log('some actions', value)
} else {
    console.log('else', value)                                    // else undefined // value undefined, значит false
}
// -----------------------------------
value = 0

if (value) {                          // что подразумевается что есть value?  это значит что оно не undefined, не NaN, не null, не пустая строка
    console.log('some actions', value)
} else {
    console.log('else', value)                                    // else 0 // value 0, значит false
}
//-----------------------------------
value = NaN

if (value) {                          // что подразумевается что есть value?  это значит что оно не undefined, не NaN, не null, не пустая строка
    console.log('some actions', value)
} else {
    console.log('else', value)                                    // else NaN // value NaN, значит false
}
//------------------------------------
//====================================
// Логический оператор || - или, && - и, ! - не
value = null
if (value === null) {
    console.log(value)                                          // null
}
// можно сделать проще
// логическое 'не' или оператор ! - возвращает противоположное значение текущему, в булевом представлении

value = null       // null в булевом представлении это falue, он преобразовывает в противоположное булевое значение от текущего

console.log(!value)                  // true  // преобразовывает в противоположное в булевом значении
// console.log(!!value)               // false // два раза преобразовывает в противоположное булевое значение
// //-------------------
value = null
if (!value) {
    console.log(value)         // null // если не value, то выполнить действие (value = false, !value = true)
}
//--------------------------------------------------------------------------------------------
value = []                                 // массив это true в булевом представлении
if (value) {
    console.log(value)                     // [] // массив это true. value = true. выводит результат.
}
//-----------------------------------
if (value.length) {
    console.log(value)
} else {
    console.log('array is emty')          // array is emty // массив пустой, 0 булевом это false
}
// //------------------------------------------------------------------------------------------
// проверяем является ли массив массивом
value = [1]
if (Array.isArray(value)) {                 // Array.isArray(value) вернет true или false в зависимости является это массивом или нет
    console.log(value)                      // [1] // value является массивом
} else {
    console.log('array is emty')
}
//--------------------------------------------
let user = {
    name: 'Denis'
}

if (user.name) {
    console.log(user.name)              // Denis
} else {
    console.log('else')
}
//------------------------------------------
let user2 = {
    name: 'Denis'
}

if (user2.hasOwnProperty('name')) {          // так же можно проверить с помощью hasOwnProperty(имя ключа обьекта) возвращает есть или нету. НО не проверяет значение этого свойства. если будет ключ null, скажет да, есть
    console.log(user2.name)                     // Denis
} else {
    console.log('else')
}
//----------------------------------------------------------------
// Логический оператор || - или, && - и
//               "&& - и" запинается на лжи,           оператор "|| - или" запинается на правде,
// оператор "&& - и" каждое значение пытается преобразовать к false
// оператор "|| - или" каждое значение пытается преобразовать к true
value = 1 || 0
console.log(value)     // 1 // оператор "|| - или" останавливается на правде, пытается каждое значение преобразовать к true, и если получается то выводит его
value = 0 || 0 || 1
console.log(value)     // 1 // остановился на правде. 1 преобразовал в true
value = 0 || 0 || null
console.log(value)     // null // вернул последнюю строку
//-------------------------
value = 0 || 0 || null

let age = 10

if (age < 16 || age > 65) {                // если возраст меньше 16 или больше 65 то выполняем какие то действия
    console.log('some actions')
} else {
    console.log('good')
}
//------------------------------------
let serverNickname = 'Denis'
let nickname = serverNickname || 'default nickname'

console.log(nickname)                        // Denis
//---------------------------------------
// оператор "&& - и" запинается на лжи

value = 1 && 0 && 3
console.log(value)           // 0 // запинается на false
value = 1 && 2 && 3
console.log(value)           // 3 // если все будут правдивы, вернет последнее true
//-----------------------------------------

productPrice = 10

if (productPrice >= 5 && productPrice <= 20) {
    console.log('беру')
} else {
    console.log('не подходит')
}
//-------------------------------------------
//  else if
value = 10

if (value < 10) {
    console.log('value < 10', value)
} else if (value > 10) {                                // если еще хотим проверку сделать то пишем конструкцию else
    console.log('подумаю', value)
} else if (value = 10){
    console.log('ровно 10', value)
} else {
    console.log('хз')
}













//
//===============================================================================
// Фрилансер по жизни операторы
// Термины : "унарный", "бинарный", "операнд"

/*
Операнд это то  к чему применяется оператор, их еще называют аргумент
 */

// Примеры:
let userAge = 30 - 6         // числа 30 и 6 - это операнды
// либо
let userHeight = h - y       // Переменные h и y -это операнда

/*
бинарными называются операторы которые применяются к двум операндам.
В нашем примере вычитание -, это бинарный оператор.
 */
let userAge = 30 - 6

/*
унарным считается оператор, который применен к одному операнду, например:
 */
let userCash = -800
//----------------------------------------------------------------------------
// Приоретет операторов





































