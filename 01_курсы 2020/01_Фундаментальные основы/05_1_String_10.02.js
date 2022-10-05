// String
// обьекты содержат в себе свойства и методы
// методы это функция записанная в свойства обьекта
// свойства это клоч значение

const firstName = 'Denis'
const lastName = 'Mescheryakov'
const age = 30
const str = 'Helo my name is Denis'

let value

value = firstName + lastName
value = firstName + ' ' + lastName
// value = value + ' I am ' + age
value +=' I am ' + age

value = lastName.length                          // длина строки
value = lastName[2]                             // второй элемент
value = lastName[lastName.length - 1]          // последний элемент. нужно сделать -1 так как символов в строке 12, а элементов 11(начинается с 0)
value = firstName[firstName.length - 1]


// Методы изменяют строку и возвращают измененный результат
// Исходная строка не меняется.
value = firstName.toUpperCase()                // метод возводят все символы в верхний регистр
value = firstName.toLowerCase()                // метод возводят все символы в нижний регистр
value = firstName[0].toLowerCase()             // метод возводят все символы в нижний регистр
console.log(firstName[0].toLowerCase())        // Если мы захотим перевести в нижний регистр какой-то конкретный символ
// console.log(firstName.toUpperCase())

value = firstName.concat(' ', lastName)         // обьединили firstName и lastName через пробел(делали выше вариант длинне)
value = firstName.indexOf('n')                  // принимает подстроку которую мы хотим найти(вернет только первое вхождение)

value = str.indexOf('n', 10)                   // вторым аргументом ставим с какой позиции ИСКАТЬ
value = str.indexOf('my')                      // поиск когда нужна позиция найденой подстроки
value = str.indexOf('!')                       // если не находит возвращает -1
// Найти положение второго пробела (“вручную” ничего не считать)
console.log(value = str.indexOf(' ', str.indexOf(' ') + 1))  // вторым аргументом ставим с какой позиции ИСКАТЬ.задаем первый найденый параметр + 1
value = str.lastIndexOf('n')                      // ИЩЕТ с конца строки
value = str.includes('my')                   // (true) тоже ищет, возвращает булевое значение есть или нету даная строка
console.log(str.startsWith('Helo'))              // ищет в начале строки
console.log(str.endsWith('Denis'))                 // ищет в конце строки

value = str.slice(0, 5)                // принимает стартовый индекс с котороги мы хотим что то ВЫРЕЗАТЬ и конечный индекс но не включая конечный
value = str.slice(0)                   // 0, просто вернет всю строку
value = str.slice(5)                   // 5, вырежит с 5 до конца строки
value = str.slice(0, -3)               // минус вырежет с конца строки

value = str.replace('Denis', 'Den')    // позволяет ЗАМЕНИТЬ значение в строке(первое значение на второе)


console.log(value)



// ----------------------------------------------------------------------

// alert( 'I\'m the Walrus!' )                // перед кавычкой нужен символ экранирования \
// alert( "I'm the Walrus!" )                 // или другие кавычки
// alert( `I'm the Walrus!` )
//
// alert( `The backslash: \\` )               // если нужно вывести слеш, добавляем перед ним еще один

// const ass = (`My\n`.length)
// qqw = ass[2]
// console.log(ass)


// let str1 = 'Hello'
//
// console.log(str1[0])
// console.log(str1[str1.length - 1])           // поиск первого и последнего символа

// for (let char of "Hello") {
//     console.log(char)
// }                                           // можно перебрать строку посимвольно, используя for..of

// поиск всех подстрок
// let str3 = 'Helo my name is Denis'
// let target = 'is'
//
// let pos = 0
// while (true) {
//     let foundPos = str3.indexOf(target, pos)
//     if (foundPos == -1) break
//
//     console.log(`Найдено тут: ${foundPos}`)
//     pos = foundPos + 1
// }                                             // пример с учебника



// --------------------------------------------------------------------------














