// this (контекст)


function hello() {
    console.log('Hello', this);
}


const person = {
    name: 'Vladilen',
    age: 36,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),// чтобы передавать нужный контекст есть метод .bind
    logInfo: function(job, phone) {
        console.group(`${this.name} info`);
        console.log(`Name is ${this.name}`);
        console.log(`job is ${job}`);
        console.log(`phone is ${phone}`);
        
        console.groupEnd();
        
    }
}

// console.log(this === window)                    // true

// console.log(person);                            // 
// console.log(person.sayHello());                 // this на person
// console.log(person.sayHelloWindow());           // биндим this на window

person.logInfo()


const lena = {
    name: 'Elena',
    age: 45,
}

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-85845-54')
// fnLenaInfoLog()

// медод call

person.logInfo.call(lena,  'Frontend', '8-999-85845-54')  // метод call вызывает функцию сразу


person.logInfo.apply(lena, ['Frontend', '8-999-85845-54'])   // в метод apply всегда передаются только два рараметра в отличии от call. второй параметр всегда массив из параметров


//============================================

const array = [1, 2, 3, 4, 5]
const array50 = [10, 20, 30, 40, 50]
// function multBy(arr, n) {
//     return array.map(i => i * n)
// }
// с помощью this


Array.prototype.multBy = function(n) {       // записываем в прототип
    return this.map(i => i * n)
}


console.log(array.multBy(20))
console.log(array50.multBy(50))

















