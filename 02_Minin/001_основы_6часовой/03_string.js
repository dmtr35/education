// const name = 'Vladlen'
// const age = 26
//
// function getAge() {
//     return age
// }
//
// // const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `ривет, меня зовут ${name} и мой возраст ${age < 20 ? 'A' : 'B'} лет.`
//
//
// console.log(output)

// const output = `
// <div>This is div</div>
// <p>this is o</p>
// `
// console.log(output)

// const name = 'Vladlen'
//
// console.log(name.length)            // количество букв в строке
// console.log(name.toUpperCase())     // переводит в верхний регистр
// console.log(name.toLowerCase())     // переводит в нижний регистр
// console.log(name.charAt(2))         // выводит вторую букву
// console.log(name.indexOf('!'))      // -1 нет такого значения
// console.log(name.startsWith('Vl'))  // стартует ли строка с Vl
// console.log(name.endsWith('en'))    // заканчивается ли строка с Vl
// console.log(name.includes('dl'))    // ищет есть ли в строке такое значение
// console.log(name.padStart(10))      // добавляет пробелы чтобы в строке было 10символов, вторым арг. символы какими нужон напилнить строку
// console.log(name.padEnd(10))      // добавляет в конец строки

// console.log(name.repeat('3'))       // 3 раза вывести без пробела
//
// const string = '     password    '
// console.log(string.trim())           // .trim убирает пробелы
// console.log(string.trimLeft())       // убирает пробелы с лева
// console.log(string.trimRight())      // убирает пробелы с права
// console.log(string.trimEnd())        // убирает в конце
// console.log(string.trimStart())      // убирает с начала

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Владилен'
const personName2 = 'Максим'
const personage = 26
const personage2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personage}`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personage2}`

console.log(output)
console.log(output2)













