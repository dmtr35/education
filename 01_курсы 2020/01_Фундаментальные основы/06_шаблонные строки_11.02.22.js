// шаблонные строки








const firstName = 'Denis'
const lastName = 'Mescheryakov'
const age = 26

let str

str = 'Hello my name is ' + firstName + ' ' + lastName

// str = '<ul>' +
//       '<li>first name: ' + firstName + '</li>' +
//       '<li>last name: ' + lastName + '</li>' +
//       '<li>Age: ' + age + '</li>' +
//       '</ul>'                                                       // с обычными скобками, ниже с обратными



// console.log(str)

// ES6
str = `
    <ul>
        <li>First name: ${firstName}</li>                              
        <li>last name: ${lastName}</li>                                
        <li>Age: ${age}</li>                                           
        <li>Math.random: ${Math.round(Math.random() * 10)}</li>     
        <li>5 +5: ${5 + 5}</li>                                        
    </ul> 
`                                                                    // через обратные скобки

document.body.innerHTML = str                                      // передаем строку str в dom (в body)



// --------------------------------------------------------------------

// Задача 1. Получить первую и последнюю буквы строки
let string = 'some test string'
value = string[0]
value = string[string.length - 1]

// Задача 2. Сделать первую и последнюю буквы в верхнем регистре
console.log(value = string[0].toUpperCase() + string.slice(1, -1) + string[string.length -1].toUpperCase())

// Задача 3. Найти положение слова ‘string’ в строке
console.log(value = string.indexOf('string'))

// Задача 4. Найти положение второго пробела (“вручную” ничего не считать)
console.log(value = string.indexOf(' ', string.indexOf(' ') + 1))  // вторым аргументом ставим с какой позиции ИСКАТЬ.задаем первый найденый параметр + 1
console.log(value = string.indexOf('s'))
console.log(value = string.indexOf('s', string.indexOf('s') +1 ))
console.log(value = string.indexOf('s', string.indexOf('s', string.indexOf('s') + 1) +1 ))

// Задача 5. Получить строку с 5-го символа длиной 4 буквы
console.log(value = string.slice(5, 9))                   // Метод srt.slice(start [, end]) - Возвращает часть строки

// Задача 6. Получить строку с 5-го по 9-й символы
console.log(value = string.slice(5, 10))

// Задача 7. Получить новую строку из исходной путем удаления последних 6-и символов
console.log(value = string.slice(0, -6))

// Задача 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20
let b = 16
// let c = String(a) + String(b)
let c
console.log(c = a.toString() + b.toString())
console.log(typeof c)




















