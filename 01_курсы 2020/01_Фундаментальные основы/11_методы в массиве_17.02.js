// методы в массиве
//








const people = [
    {name: 'Владилен', age: 25, budget: 40000},
    {name: 'Елена', age: 17, budget: 3400},
    {name: 'Игорь', age: 49, budget: 50000},
    {name: 'Михаил', age: 15, budget: 1800},
    {name: 'Василиса', age: 24, budget: 25000},
    {name: 'Виктория', age: 38, budget: 2300},
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    console.log(people)
}
// //------------------------------------------------
for (let person of people) {
    console.log(person)
}
//-----------------------------------------------
// метод ForEach - делаем итерацию для каждого елемента
people.forEach(function (person,index, pArr) {     // элемент, индекс и массив по которому мы делаем итерацию
    console.log(person)
    // console.log(index)
    // console.log(pArr)
})
//----------------------------------------------
people.forEach(person => console.log(person))           // приводим к стрелочной функции
//==================================================================
console.log('==================================================')





// метод map  служит для преобразования текущего массива в новый массив

const newPeople = people.map(person => {return `${person.name} (${person.age})`
    // return person.name
    // return `${person.name} (${person.age})`
})
console.log(newPeople)
//---------------------------------------------
const newPeople2 = people.map(person => `${person.name} (${person.age})`)         // такой новый масив
console.log(newPeople2)

const newPeople3 = people.map(person => person.age * 3)                           // возраст человека умножаем на 3
console.log(newPeople3)
//------------------------------------------------------------------















//==================================================================
// метод Filter

const adults = []
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {                             // если человеку больше 18, то
        adults.push(people[i])              // Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
    }
}
console.log(adults)
//-----------------
const adults2 = people.filter(person => {             // filter() элемент, индекс и массив по которому мы делаем итерацию
    if (person.age >= 18) {
        return true
    }
})
console.log(adults2)
//-----------------------------------------------------------------------
const adults3 = people.filter(person => person.age >= 18)
console.log(adults3)
//===========================================================================

// метод  Reduce
let amount = 0
for (let i = 0; i < people.length; i++) {
    amount += people[i].budget
}
console.log(amount)
//---------------------------------------
let amount2 = people.reduce((total, person) => {                 // метод reduce принимает 2 параметра массив.reduce(callback, начальное значение,0, которое присвоится person)
    return total + person.budget
}, 0)
console.log(amount2)
//----------------------------------------
let amount3 = people.reduce((total, person) => total + person.budget, 0)
console.log(amount3)
//==========================================================================
// метод Find                   // служит для поиска элементов.
const igor = people.find(person => person.name === 'Игорь')
console.log(igor)

// похожий метод FindIndex                                             // ищет индекс
const igorIndex = people.findIndex(person => person.name === 'Игорь')
console.log(igorIndex)
//============================================================================

// Задачка

const amount4 = people
const newPeople4 = people
    .filter(person => person.budget > 3000)                  // отфильтруем по бюджету выше 3000
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            butget: person.budget
        }
    })
    .reduce((total, person) => total + person.butget, 0)



console.log(newPeople4)
console.log(amount4)































// let str = 'i am in the easycode'
// let res = ''
//
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == [] && str[2]) {
//         console.log(str[0].toUpperCase(), str[2].toUpperCase())
//         break
//     }
//     // console.log(str[i] + '!')
//     // if (str[' ' + 1]) {
//     //    str.toUpperCase()
//     // }
//     // res += str[i]
//     console.log(str)
// }









// let firstName = 'i am in the easycode'
//
// while (firstName[0]) {
//     console.log(firstName[0].toUpperCase(), firstName[2].toUpperCase())
//     break
// }

// console.log(firstName[1].toUpperCase())        // Если мы захотим перевести в нижний регистр какой-то конкретный символ


// const firstName2 = 'i am in the easycode'
// while (firstName2[0] === [0]) {
//     console.log(firstName2[0].toUpperCase())
//     break
// }




































