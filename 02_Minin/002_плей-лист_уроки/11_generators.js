// generators

const array = [10, 20, 30, 40]
const str = 'Hello'

console.log(array[Symbol.iterator]);                 // [Function: values]
console.log(str[Symbol.iterator]);                  // [Function: [Symbol.iterator]]



// const iter = array[Symbol.iterator]()

// console.log(iter);                                   // Object [Array Iterator] {}
// console.log(iter.next());                            // { value: 10, done: false }
// console.log(iter.next());                            // { value: 20, done: false }
// console.log(iter.next());                            // { value: 30, done: false }
// console.log(iter.next());                            // { value: 40, done: false }
// console.log(iter.next());                            // { value: undefined, done: true }

// const iter2 = str[Symbol.iterator]()

// console.log(iter2);                                   // Object [String Iterator] {}
// console.log(iter2.next());                            // { value: 'H', done: false }
// console.log(iter2.next());                            // { value: 'e', done: false }
// console.log(iter2.next());                            // { value: 'l', done: false }
// console.log(iter2.next());                            // { value: 'l', done: false }
// console.log(iter2.next());                            // { value: 'o', done: false }

//-------------------------------------------------------
// for (let item of array) {
//     console.log(item);
// }
// for (let item of str) {
//     console.log(item);
// }

// const country = {
//     values: ['ru', 'kz', 'ua', 'by'],
//     [Symbol.iterator]() {
//         let i = 0
//         return {
//             next: () => {
//                 const value = this.values[i]
//                 i++
//                 return {
//                     done: i > this.values.length,
//                     value
//                 }
//             }
//         }
//     }
// }

// for (let item of country) {
//     console.log(item);
// }

//=============================================
// Generator  
// чтобы функция была генератором обознаачем ее *

function *gen(num = 4) {
    for (let i = 0; i < num; i++) {
        try {
            yield i                         // применяем yield и порционно выделяем i
        } catch (e) {
            console.log('Error', e);
            
        }
    }
}

const iter = gen(3)                         // [Function: [Symbol.iterator]]
console.log(iter.next());                   // { value: 0, done: false }
console.log(iter.throw('My Error'));      // Error My Error
console.log(iter.next());                   // { value: 2, done: false }
console.log(iter.next());                   // { value: undefined, done: true }

// for (let i of gen(4)) { 
//     console.log(i);
// }













