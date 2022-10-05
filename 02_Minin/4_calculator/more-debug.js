// const people = [
//     {id: 1, name: 'Vitalino', age: 45},
//     {id: 2, name: 'Igor', age: 23},
//     {id: 3, name: 'Vivito', age: 12},
//     {id: 4, name: 'Martin', age: 56},
// ]


// console.table(people);

console.time('timer');
const items =[]
for (let i =0; i < 100000; i++) {
    items.push({el: i + 1})
}
console.timeEnd('timer');













