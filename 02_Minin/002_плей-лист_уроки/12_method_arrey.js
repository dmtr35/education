// forEach, map, filter, reduce, find, findIndex


const people = [
    { name: 'Vladilen', age: 25, budget: 40000 },
    { name: 'Elena', age: 17, budget: 3400 },
    { name: 'Igor', age: 49, budget: 50000 },
    { name: 'Misha', age: 15, budget: 1800 },
    { name: 'Vasyz', age: 24, budget: 25000 },
    { name: 'Anton', age: 38, budget: 2300 },
]


for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
console.log('-----------------------------------------');

for (let i of people) {
    console.log(i)
}

console.log('-----------------------------------------');

// ForEach



// people.forEach(function(per, i, pArr) {                         // (создаем каждый обьект даного массива, индекс, массив)
//     console.log(per);
//     console.log(i);
//     console.log(pArr);
// })


people.forEach(person => console.log(person))



console.log('-----------------------------------------');

// map   создает новый массив и заносит его в новую переменную

// const newPeople = people.map(pers => {
//     return pers.name
// })

// console.log(newPeople);


console.log('-----------------------------------------');

// Filter 

const sigar = people.filter(p => p.age >= 18 && p.budget === 40000)

console.log(sigar);


console.log('-----------------------------------------');

// Reduce (получить финальное значение совершив итерацию по массиву)
// принимает 2 параметра ()

let sum = 0
for (let i = 0; i < people.length; i++) {
    sum += people[i].budget
}
console.log(sum);


const sum2 = people.reduce((total, person) => total + person.budget, 0)
console.log(sum2);

console.log('-----------------------------------------');

// Find      поиск элемента

const Igor = people.find(person => person.name === 'Igor')
console.log(Igor);

console.log('-----------------------------------------');

// FindIndex   поиск индекса элемента



const IgorIndex = people.findIndex(person => person.name === 'Igor')
console.log(IgorIndex);





console.log('===========================================');



const amount = people
.filter(person => person.budget > 3000)
.map(person => {
    return {
        info: `${person.name} (${person.age})`,
        budget: person.budget
    }
})
.reduce((total, person) => total + person.budget, 0)



console.log(amount);












