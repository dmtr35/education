// Destructurization

// function calcValue(a, b) {
//     return [
//         a + b,
//         a - b,
//     ]
// }


// const [q, w] = calcValue(10, 10)

// console.log(q, w);

//------------------------------------------
// дуструкторизация обьектов
const person = {
    name: 'Max',
    age: 88,
    address: {
        country: 'Ukraine',
        city: 'Kiev'
    }
}

// const { 
//     name: firstName = 'Mix', 
//     age,  
//     car = 'нет машины',
//     address: {city: Kiev, country}
// } = person

// console.log(firstName, age, car, Kiev, country);


//-----------------------------------------

function logPerson({name: firstName = 'alik', age}) {
    console.log(name + ' ' + age);
    
}


console.log(logPerson(person))











