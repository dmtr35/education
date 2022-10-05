// String

let textHi = 'Привет!'
let textAll = `${textHi} Я строка!`

console.log(textAll)


function someSum(a, b) {
    return a + b
}
console.log(`Сума: ${someSum(4, 7)}`)


// многострочная запись

let text = `Привет!
Вы на канале
Флирансер по жизни!
`
console.log(text)

let text2 = 'Привет!\nВы на канале\nФлирансер по жизни!'
console.log(text2)

// все что в кавычках будет строкой
let someString = '158'
let someNum = 158
console.log(someString)
console.log(typeof someString)
console.log(someNum)
console.log(typeof someNum)

console.log(someString + someNum)

// Спец символы
// \n                                            // перевод строки
// \t                                            // табуляция
// \\                                            // обратный слеш
let text3 = 'Привет!\n\tВы на канале\n\t\tФлирансер по жизни!'          // \n перенос строки \t табуляция
console.log(text3)

let text4 = 'Привет! Вы на канале \\ Флирансер по жизни!'               // \ ставим слеш перед слешем чтобы выводило слеш
console.log(text4)

let text5 = "Привет! Вы на канале \"Флирансер по жизни!\""              // слеш перед скобками которые нужно вывести
console.log(text5)

let text6 = 'Живи, а работай в свободное время! \u00A9 \u{1F60D}'
console.log(text6)


// Работа со строками

// Длина строки. Свойство Length
let textOne = 'Привет!'
console.log(textOne.length)

let  text7 = 'Привет!'
let firstSymbol = text7[0]                          // выводит заданый символ
let lastSymbol = text7[text7.length - 1]            // выводит последний символ

console.log(firstSymbol)
console.log(lastSymbol)


for (const char of text6) {
    console.log(char)
}                                                  // выводит посимвольно в столбик for (.. .. of ..) {}


// изменение регистра

let text8 = 'Привет!'
console.log(text8.toUpperCase())                  // метод возводят все символы в верхний регистр
console.log(text8.toLowerCase())                  // метод возводят все символы в нижний регистр



// поиск
let text9 = 'Привет!'
console.log(text9.indexOf('Пр'))                   // поиск когда нужна позиция найденой подстроки
console.log(text9.indexOf('Пр', 3))                // вторым аргументом ставим с какой позиции ИСКАТЬ

let text10 = 'Привет!'
console.log(text10.includes('Пр'))                 // возвращает булевое значение
console.log(text10.includes('Пр', 3))              // вторым аргументом ставим с какой позиции ИСКАТЬ

console.log(text10.startsWith('Пр'))              // ищет в начале строки
console.log(text10.endsWith('!'))                 // ищет в конце строки


// регистр имеет значение  // переводим текст в маленький регистр и ищем
let text11 = 'нУпРавда лИ хороШая ПОгоДа'
let searchText = 'ХороШАЯ'
console.log(text11.toLowerCase().includes(searchText.toLowerCase()))


// получить часть строки
/*
в JS существует ряд методов получения подстроки.
Но достаточно пользоваться одним
*/

/*А
Метод srt.slice(start [, end]) - Возвращает часть строки
от start до end (не включая последний)
*/
let text12 = 'Привет!'
console.log(text12.slice(1, 2))              // выводит с 1 позиции до позиции 2 (не включительно)
console.log(text12.slice(-2, -1))            // выводит с обратной стороны текста
console.log(text12.slice(2))                 // выводит начиная с первой позиции и до конца


// Сравнение строк
// Алфавитный порядок
console.log('А' > 'Б')                       // false буква Б больше А, так как она дальше в алфавите
console.log('а' > 'Б')                       // true нижний регистр всегда больше верхнего

// Алфавитный порядок
console.log('Скрипт' > 'Скрипка')            // true т больше чем к по алфавиту(стоит позже - значит больше)

// Количество символов
console.log('Слайдер' > 'Слайд')             // true так как вторая строка закончилась

// Регистр
console.log('Фрилансер' > 'фрилансер')        // false мелкий регистр больше верхнего


// Домашка
// Задаача1 Верна ли запись
let fls = 'фрилансер'
let text13 = `Привет! Я ${fls}`
// ожидаем получить 'Привет! Я фрилансер'
console.log(text13)                           // правильно с обратными скобками

// задача 2 получить символ "н" строки:
let text14 = 'фрилансер'
let t14 = text14[5]
console.log(t14)

// Задача 3
let text15 = 123 + '456'
// ожидаем 579
console.log(text15)                           // нет, получится 123465 (при сложении со строкой получается строка)

// Задача 4 получить строку в верхнем ригистре
let text16 = 'фрилансер'
console.log(text16.toUpperCase())                   // переводит в верхний регистр

// задача 5 Получить подстроку "лан" из:
let text17 = 'фрилансер'
console.log(text17.slice(3, 6))

// задача6 true или false ?
let text18 = 'фрилансер'
console.log(text18.includes('лан', 4))             // false так как 'лан' находится на 3 позиции



















