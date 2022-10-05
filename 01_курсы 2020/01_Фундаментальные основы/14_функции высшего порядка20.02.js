// функции высшего порядка это те функции которые принимают в качестве параметров
// другие функции или возвращают другие функции

function foo() {
    console.log('Hello World')
}

foo()

foo.field = 'denis'                         // добавить в функцию поле

console.log(foo.field)                     // не рекомендуется использовать такой код

// ----------------------------------------------------------------------------
// метод map возвращает новый массив состоящий из результатов вызова функции колбека
// (которая была передана в качестве параметра)


// получить массив состоящий из элементов
// где каждый элемент является длинной строки каждого элемента из массива arr
// [5, 4, 4, 4]
const arr = ['denis', 'ivan', 'maks', 'olga']
let newArr = []

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length)                        // добавляем в массив значения

}
console.log(newArr)
// сделать символы в верхнем регистре
let newArr2 = []
for (let i = 0; i < arr.length; i++) {
    newArr2.push(arr[i].toUpperCase())
}
console.log(newArr2)

//-------------------------------------------------
// callback это функции которые были переданы в качестве параметра и вызваны внутри функции высшего порядка
// делаем с помощью функции высшего порядка
const names = ['denis', 'ivan', 'maks', 'olga']

function mapArray(arr, fn) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]))
    }
    return res
}

function nameLength(el) {
    // console.log(el)
    return el.length
}

function nameToUpperCase(el) {
    return el.toUpperCase()
}


const result = mapArray(names, nameLength)
const result2 = mapArray(names, nameToUpperCase)
// console.log(result)
// console.log(result2)

//=============================================================


function greeting(firstName) {
    return function(lastName) {
        return `Hello, ${firstName} ${lastName}`
    }
}


// const testGreeting = greeting('Denis')
// const fullName = testGreeting('Mascheryakov')
const fullName = greeting('Denis')('Mascheryakov') // передаем в функцию firstName и сразу lastName во вложеную функцию
console.log(fullName)
// console.log(testGreeting)


//===================================================================
// function question(job) {
//     if (job === 'developer') {
//         return function (name) {
//             return `${name}, что такое jawaScript?`
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             return `${name}, какой предмет вы ведете?`
//         }
//     }
// }
// //
// const delevoperQuestion = question('developer')
// console.log(delevoperQuestion('Denis'))             // вызываем эту функцию (вложеную) и даем ей имя 'Denis'
// const teacherQuestion = question('teacher')
// console.log(teacherQuestion('Denis'))

// упрощаем:

function question(job) {
    const jobDictionary = {                              // создаем обьект, с ключом и значением
        developer: `что такое jawaScript?`,
        teacher: `какой предмет вы ведете?`,
    }

    return function (name) {
        return `${name}, ${jobDictionary[job]}`
    }
}

const delevoperQuestion = question('developer')
console.log(delevoperQuestion('Denis'))
const teacherQuestion = question('teacher')
console.log(teacherQuestion('Denis'))




