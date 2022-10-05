// Spread

const citiesRussia = ['Москва', 'Сант-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']



// оператор Spread ...

console.log(citiesRussia);
console.log(...citiesRussia);
console.log(citiesEurope);
console.log(...citiesEurope);


const allCities = [...citiesRussia, ...citiesEurope]

console.log(allCities);

// Spread  с обьектами  ( клонирование обьектов)

const citiesRussiaWithPopullation = {
    Moskov: 20,
    SaintPeterburg: 8,
    Kazan: 5,
    Novosibirsk: 3,
}

const citiesEuropeWithPopullation = {
    Moskov: 26,
    Berlin: 10,
    praha: 3,
    paris: 2,
}
const citiesXn = {
    a: 10,
    w: 3,
    e: 2,
}


console.log(citiesRussiaWithPopullation);
console.log({...citiesRussiaWithPopullation});
console.log(citiesEuropeWithPopullation);
console.log({...citiesEuropeWithPopullation});

console.log({...citiesEuropeWithPopullation, ...citiesRussiaWithPopullation});   // создаем один обьект из двух


const one = {...citiesEuropeWithPopullation, ...citiesRussiaWithPopullation, ...citiesXn}

// console.log({...one, ...citiesEuropeWithPopullation, ...citiesRussiaWithPopullation});

console.log(one);


// practice
const numbers = [5, 37, 42, 17]
console.log(Math.max(5, 37, 42, 17))                   // 42
console.log(Math.max(...numbers))                         // NaN // если развернуть => 42


console.log('==========================================');

const divs = document.querySelectorAll('div')
const nodes = [...divs]                         // конвертируем nodeList divs в массив nodes

console.log(divs);                             // nodeList
console.log(nodes);                             // массив

console.log('==========================================');

/// Rest

function sum(a, b, ...rest) {
    console.log(rest);                         // [3, 4, 5]
    return a + b + rest.reduce((a, i) => a + i, 0)

}

const numbers2 = [1, 2, 3, 4, 5]
// console.log(sum(...numbers2))                 // Spread

// const a = numbers2[0]
// const b = numbers2[1]

const [a, b, ...other] = numbers2
console.log(a, b, other);                      // 1 2 (3) [3, 4, 5]

//--------------------------------------

const person = {
    name: 'Max',
    age: 28,
    city: 'Moscow',
    country: 'Russia',
}

const { name, age, ...address } = person

console.log(name, age, address);


















