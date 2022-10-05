// promise

// const promise = new Promise((resolve, rejekt) => {
//     setTimeout(() => {
//         resolve('Success')
//         // console.log('After delay');
//     }, 1000)
// })

const delay = ms => new Promise((resolve, rejekt) => {
    setTimeout(() => resolve(`Done ${ms}`), ms)
})

// delay(1000).then(data => delay(1000))                          
//     .then(data => console.log(data))                          // Done
//     .catch(err => console.log(err))
//     .finally(() => console.log('finally'))

// async await ---------------------------------------------

// async function asyncDelay() {
//     try {
//         const data = await delay(2000)
//         console.log(data);
//     } catch(e) {
//         console.log('Error: ', e);
        
//     }
// }

// asyncDelay()

//===========================================

Promise.all([                       // Promise.all ждет пока завершатся все промисы
    delay(3000),
    delay(500),
    delay(2000),
]).then(data => console.log(data))

Promise.race([                       // Promise.race ждет пока выполнится самый быстрый промис массива
    delay(3000),
    delay(500),
    delay(2000),
]).then(data => console.log(data))









