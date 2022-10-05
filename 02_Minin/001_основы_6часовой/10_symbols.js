// Symbol

const symbol = Symbol('demo')
const other = Symbol('demo')


console.log(symbol);                    // symbol
console.log(other);                     // symbol
console.log(symbol == other);          // false // символы уникальны


const obj = {
    name: 'Elena',
    demo: 'DEMO',
    [symbol]: 'meta'
}

console.log(obj);                        // { name: 'Elena', [Symbol(demo)]: 'meta' }
console.log(obj[symbol]);                // meta
console.log(obj[other]);                 // undefined

for (let key in obj) {                    // символов даный цикл не видит
    console.log(key);                    // name demo
}













