// class



class Animal {
    static type = 'ANIMAL'              // если переменная или метод является статической, то она доступна только у класса

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am Animal!');        
    }
}

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true, 
// })


console.log(animal);



class Cat extends Animal {}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
})






// const person0 = {
//     name: 'Vladilen',
//     birthYear: 1993,
// }

// console.log(person0);



// const person = Object.create(
//     {
//         c
//     },
//     {
//     name: {
//         value: 'Vladilen',
//         enumerable: true,
//         writable: true,
//         configurable: true,
//     },
//     birthYear: {
//         value: 1993,
//         enumerable: false,
//         writable: false,
//         configurable: false,
//     },
//     age: {
//         get() {
//             return new Date().getFullYear() - this.birthYear
//         },
//         set(value) {
//             document.body.style.background = ''
//             console.log('Set age:', value);
            
//         }
//     }
// })


// person.age = 100
// console.log(person.age);

// for(let key in person) {
//     console.log('key:', key, person[key]);
    
// }












// let b = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(a = 99)
//     })
// })

// b.then(() => {
//     console.log(a);
// })
// b.then(() => {
//     console.log(a);
// })















// console.log('start');

// const q = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(1)
//         resolve()     
//     }, 5000)
// })
// .then(() => {
//     setTimeout(() => {
//         console.log(2)
//     }, 4000)
//     new Promise((resolve, reject) => {
//         resolve()
//     })
//     .then(() => {
//         setTimeout(() => {
//             console.log(3)
//         }, 2000)
//     })
// })
// .then(() => {
//     setTimeout(() => {
//         console.log(4)
//     }, 3000)
// })
// .then(() => {
//     setTimeout(() => {
//         console.log(5)
//     }, 2000)
// })
// .then(() => {
//     setTimeout(() => {
//         console.log(6)
//     }, 1000)
// })



// //? считывать данные с файла
// const readFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
//         if(err) {
//             return reject(err.massage)
//         }
//         resolve(data)
//     }))
// }

// //? удаляем файл
// const removeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.rm(path, (err) => {
//         if(err) {
//             return reject(err.massage)
//         }
//         resolve()
//     }))
// }

// //? вызовы функций
// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')                             // передаем данные в функцию
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'123'))             // добавляем в файл информацию
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'789'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))                    // считываем файл и выводим в логи
//     .then(data => console.log(data))
//     .catch(err => console.log('err'))



// setTimeout(() => {
//     console.log('1')

//     setTimeout(() => {
//         backet = true
//         console.log('2');
        
//         setTimeout(() => {
//             backet = true
//             console.log('3');
            
//             setTimeout(() => {
//                 backet = true
//                 console.log('4');
                
//             }, 1000)
//         }, 0)
//     }, 8000)

// }, 3000)






// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('11')
//         resolve()
//     }, 1000)
// })

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('1')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'wokring'
//         }
//         resolve(backendData)
//     }, 2000)
// })





// p.then(data => {
//     console.log('2', data);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modifies = true
//             resolve(data)
//         }, 2000)
//     })
// }).then(clientData => {
//     console.log('22', clientData)
// }).then(() => {
//     setTimeout(() => {
//         console.log(3);
//     }, 0)
// })












// console.log('end');
/*
Возьмите целое число n (n >= 0)и цифру d (0 <= d <= 9)как целое число.

Возведите в квадрат все числа k (0 <= k <= n)от 0 до n.

Подсчитайте количество цифр, dиспользованных при написании всех k**2.

Вызовите nb_dig(или nbDig или...) функцию, принимающую nи dв качестве параметров и возвращающую это количество.
*/


// function nbDig(n, d) {
//   let arr = []
//   let str = ''
//   for (let k = 0; k <= n; k++) {
//     arr.push(k**2)
//     console.log(arr)
//   }
//   str = arr
//     .join('')                                                             // делает из массива строку, принимая разделитель, если разделитель не перден вернет в виде строки через запятую
//     .split('')                                                            // из строки сделать массив, '' - разбивка по символам
//     console.log(str)
//     const filteredNumbers = str.filter(Number => Number == d).length      // фильтруем по числам равным d и выводим воличество элементов в массиве 
//   console.log(filteredNumbers)
// return filteredNumbers  
// }

// nbDig(5, 1)



// (0 <= k <= n)

// function filter_list(l) {
//   return l.filter(Number.isFinite)
// }

// console.log(filter_list([1,'0','101',0, 15]))

// function filter_list(l) {
//   let arr = l.filter(check(l >= 0))
//   return arr
// }

// console.log(filter_list([1,'0','101',0, 15]))




// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
//
//
// console.log(pow2Fib)
// console.log(filteredNumbers)

// function usdcny(usd) {
//   let Yuan = (usd * 6.75).toFixed(2)
//   return `${Yuan} Chinese Yuan`
// }

// console.log(usdcny(15))




// function wrap(value) {

//   const wrapper_obj = {
//     value: value
//   };
//   return console.log(wrapper_obj.value)


// }

// wrapper_obj = wrap("my_wrapped_string"); 

// wrapper_obj["value"] == "my_wrapped_string"

// console.log(wrapper_obj)











// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
    
//     return length * width * height
//   }
// }

// Kata.getVolumeOfCuboid(2, 2, 2)
// console.log(Kata.getVolumeOfCuboid(2, 2, 2))






// function lovefunc(x, y){

//   return (x + y) % 2 !== 0
// }
// console.log(lovefunc(231,8));


// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 !==0;
// }

// console.log(lovefunc(232,7));

// const mageArr = ['woman;', 'man;', 'Fish;', 'nut;', 'bird;', 'Hamster;', 'Cat;', 'Dog;', 'myArr']
// mageArr.forEach(pet => console.log(pet))





// function powersOfTwo(n) {
//     return Array.from({length: n + 1}, (v, k) => 2 ** k);
//   }
// console.log(powersOfTwo(2));














