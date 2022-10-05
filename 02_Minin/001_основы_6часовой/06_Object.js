// Обьекты 3:45:15



const person = {
    name: 'Vladilen',
    age: 26,
    ipProgramer: true,
    languages: ["ru", 'en', 'de'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed Key',
    greet() {
        console.log('greet from person')
    },
    info() {                                       // метод info
        // console.log('this:', this)
        console.info('Информация про человека по имени:', this.name)
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()
//
// person.age++
// person.languages.push('by')
// // person['key_4'] = undefined
// delete person['key_4']
//
// console.log(person)
// console.log(person['key_4'])


// const name = person.name
// const age = person.age
// const languages = person.languages
// или упрощаем код
// const {name, age: personAge = 10, languages} = person
//
// console.log(name, personAge, languages)


// console.log(person)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key)
//         console.log('value:', person[key])
//     }
// }

// const keys = Object.keys(person)
// Object.keys(person).forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])
// })



// Context
// person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))   // this это logger
    },

    keysAndValues() {
        // Object.keys(this).forEach(key => {
        //     console.log(`"${key}": ${this[key]}`)
        // })
        // const self = this
        Object.keys(this).forEach(function(key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------ Start ------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length -1) {
                console.log('----------------')
            }
        })

        if (bottom) {
            console.log('------ End ------')
        }
    }
}

// const bound = logger.keys.bind(logger)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])



//============================================================================

// Object

const address = {
    country: 'Russia',
    city: 'Moskow',
    street: 'Lenina',
    concat: function() {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}
// console.log(address.concat())                                  // Russia Moskow Lenina

const {city, country, street} = address

console.log(city, country, street);                               // Moskow Russia Lenina


const newAddress = {...address, street: 'Tverskaya', code: 123}   // копируем обьекм, меняем и добавляем поля

console.log(newAddress);  

//=============================================

console.log(Object.is(20, 20))      // сравнивает // true

//------------------------------------------------------------
// добавление в обьект

const first = {a: 200}
const second = {b: 300}

console.log(Object.assign(first, second))     // обьеденяет обьекты         // {a: 200, b: 300}

console.log(first);                          // обьект first изменился тоже // {a: 200, b: 300}
console.log(second);                         //                                {b: 300}

// чтобы создать новый обьект, первым параметром передаем пустой обьект

const first2 = {a: 200}                             
const second2 = {b: 300}

console.log(Object.assign({}, first2, second2))     // обьеденяет обьекты         // {a: 200, b: 300}

console.log(first2);  


// ==============================================================
// чтобы создать новый обьект, первым параметром передаем пустой обьект

const first3 = {a: 1}                             
const secon32 = {b: 2}

const obj = Object.assign({}, first3, {
    c: 2,
    d: 3
})

console.log(obj);                                  // {a: 1, c: 2, d: 3}                            

//=====================================================
// получаем асоциативный массив из обьекта

console.log(Object.entries(obj))                  // ['a', 1] ['c', 2] ['d', 3]
console.log(Object.keys(obj))                     // ['a', 'c', 'd']
console.log(Object.values(obj))                   // [1, 2, 3]




