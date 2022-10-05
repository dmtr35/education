






















// Event Loop   Асинхронность
// const timeout = setTimeout(() => {
//     console.log('After timeout')
// }, 2500)
//
// clearTimeout(timeout)
//
// const interval = setInterval(() => {      // через какое время запускать интервал
//     console.log('After timeout')
// }, 1000)
//
// clearTimeout(interval)


// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
// delay(() => {
//     console.log('After 2 seconds')
// }, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject('Что то прошло не так, повторите попытку')

        }, wait)
    })
    return promise
}

// delay(2500)
//     .then(() => {
//         console.log('After 2 seconds')
//     })
//     .catch(err => console.error('Errore:', err))
//     .finally(() => console.log('Finally'))

const getDate = () => new Promise(resolve => resolve([
    1, 1, 2, 4, 8, 13
]))

// getDate().then(data => console.log(data))

async function asyncExampl() {
    try {
        await delay(3000)
        const data = await getDate()
        console.log('Data', data)
    }   catch(e) {
        console.log(e)
    }   finally {
        console.log('finally')
    }

}

asyncExampl()

// console.log(delay)
// console.log(promise)


















