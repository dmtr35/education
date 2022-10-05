// class

class Person {
    type = 'human'

    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(this.name + ' говорит привет');           // Max говорит привет
        
    }
}

const max = new Person('Max')
max.greet()
console.log(max);                                             // Person { name: 'Max' }
console.log(max.type);                                        // human

console.log(max.__proto__ === Person.prototype)               // true  // все устроено на прототипах



class Programmer extends Person {                        // Programmer будет наследоваться от Person
    constructor(name, job) {
        super(name)

        this._job =job
    }

    get job() {
        return this._job.toUpperCase()
    }

    set job(job) {
        if (job.length < 2) {
            console.log('Validation failed')
        } else {
            this._job = job
        }
    }

    greet() {
        super.greet()                                 // если мы хотим вызывать так же родительский метод
        console.log('Rewritten');                     // переписываем даный метод. он был в Person // Rewritten
    }
}

const frontend = new Programmer('Max', 'frontend')
// console.log(frontend);                                   // Programmer { type: 'human', name: 'Max', _job: 'frontend' }
// frontend.greet()                                    // greet можем вызывать потому что он есть в родительском классе (можем его переписывать)
console.log(frontend.job);
frontend.job = 'Backend'
console.log(frontend.job);


//==============================================================
// Static
class Util {
    static average(...args) {
        return args.reduce((acc, i) => acc += i, 0) / args.length
    }
}

const res = Util.average(1, 1, 2, 3, 5, 8, 13)
console.log(res);



