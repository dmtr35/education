// Масивы
const cars = ['mazda', 'Ford', 'BMW', 'Mersedes']


    // Metod
    cars.push('Reno')                         // добавляем элемент в конец масива
    cars.unshift('Volga')                     // добавляем элемент в начало масива
    cars.shift()                              // удаляем элемент из начала масива
    
    const firstItem = cars.shift()            // mazda // сохранили в переменной удаленный элемент
const lastCar = cars.pop()                // возвращает последнию машина и удаляет ее из масива
console.log(firstItem);
console.log(lastCar)                  


cars.reverse()                             // возвращает масив и мутирует его(в обратном порядке)
console.log(cars)


// хотим поменять bmv на другую машину
console.log(cars.indexOf('BMW'))           // возвращает индекс элемента
const index = cars.indexOf('BMW')          // индексОф работает с примитивными даными, сточки, числа
cars[index] = 'Porsh'
console.log(cars)
console.log(index)

console.log(cars.includes('mazda'));                // false //прверить если такая строчка в масиве


//------------------------------------------------

const people = [
    {name: 'Vladilen', budget: 4200},      // масив, в нем обьекты через фигур скобки
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]



let findedPerson                              // ищем 3500 через цыклы
for (const person of people) {                    // создали person и ищем по массиву people
    console.log(person)
    if(person.budget === 3500) {
        findedPerson = person
    }
}
console.log(findedPerson)


const index2 = people.findIndex(function (person) {       // метод findIndex это цикл, работает с обьектами
    return person.budget === 3500              
})
const person = people.find(function(person) {
    return person.budget === 3500
})
// const person = people.find((person) => {
//     return person.budget === 3500
// })                                                             // можем еще сократить

// const person = people.find(person => person.budget === 3500)      // сократили код

// console.log(people[index2])
// console.log(person)







// методы высокого порядка

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// const pow2 = num => num  2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(sqrt)
// console.log(pow2Fib)


// const pow2 = num => num  2


// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
//
//
// console.log(pow2Fib)
// console.log(filteredNumbers)





// Задача 1
// const text = 'Привет, мы изучаем JavaScript'    // Перевернуть строку
// const reverseText = text.split('').reverse().join('')    // делим масив на 2 элемента + реверс + в нормальный вид
// console.log(reverseText)

// задача2
// const people = [
//     { name: 'Vladilen', budget: 4200 },      // просумировать числа, но только те что больше 2000
//     { name: 'Elena', budget: 3500 },
//     { name: 'Victoria', budget: 1700 }
// ]

// const allBudget = people.reduce((acc, person) => {
//     if (person.budget > 2000) {
//         acc += person.budget
//     }
//     return acc
// }, 0)

// console.log(allBudget)

// // или

// const allBudget = people
//     .filter(person => person.budget > 2000)  // person элемент по которому делаем итерацию
//     .reduce((acc, person) => {
//         acc += person.budget
//         return acc
//     }, 0)

// console.log(allBudget)














