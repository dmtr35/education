// Proxy

// Objects
const person = {
    name: 'Vladilen',
    age: 25,
    job: 'Fullstack'
}

const op = new Proxy(person, {                 // (target - цель на которую хотим повесить Proxy, набор хендлеров "методы которые позволяют сделать ловушки для обьекта")
    get(target, prop) {                                      // метод get (хендлер) - что-то возвращает.   принимает 2 параметра (target, prop)
        console.log(`Getting prop ${prop}`);
        
        return target[prop]
    },
    set(target, prop, value) {                             // принимает таргет(обьект за которым следить), prop(ключ), и value которое хотим добавить
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {                                     //  has отвечает если такое поле в обьекте(true либо false)
        return ['name', 'age', 'job'].includes(prop)        // спрашиваем есть ли значение prop?
    },
    deleteProperty(target, prop) {                                     // удалять свойство из обьекта
        console.log('Deleting... ', prop);
        delete target[prop]                        // удаляет и возвращает false...
        return true                                // ...чтобы выводило true пишем 'return true'
    }
})



console.log(op.name)                                    // с помощью get вызываем значение и запускаем тем самым ловушку
console.log(op.age = 15)                                 // изменяем значение с помощью set
console.log('age' in op)                                 // true // спрашиваем есть ли строка в op? с помощью метода 'has'
console.log(delete op.age)                               // false (удалено)

console.log(op);


console.log('=======================================================');

//====================================================================


// function

const log = text => `Log: ${text}`

const fp = new Proxy(log, {                 // первый параметр target(функция за которой следить, вторым обьект хендлеров)
    apply(target, thisArg, args) {          // (target функц. которую мы проксируем, thisArg - контекст если мы его передавали(с помощью bine или call), args - все параметры которые мы передаем в нашу функц.)
        console.log('Calling fn...');

        
        return target.apply(thisArg, args).toUpperCase()

    }
})

console.log(fp('hello'));                      // LOG: HELLO


console.log('=======================================================');

//====================================================================

// Classes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    // для того чтобы отследить инициализацию нового класса через ключевое слово 'new' можем использовать construct 
    construct (target, args) {
        console.log('Construct...')


        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop "${prop}"`);
                return t[prop]
            }
        })      // возвращаем новый обьект target с массивами args

    }
})

const p = new PersonProxy('Maxim', 30)
console.log(p);                                  // Person {name: 'Maxim', age: 30}














