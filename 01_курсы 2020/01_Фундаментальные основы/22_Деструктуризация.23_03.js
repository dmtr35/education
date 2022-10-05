// Деструктерицация
// Деструктурировать можно обьекты, массивы, входные параметры в функции(если это обьекты или массивы)

//! Деструктерицация обьектов
const user = {
    firstName: 'Denis',
    lastName: 'Vescheryakov',
    age: 25,
}


// const firstName = user.firstName
// const lastName = user.lastName

const { firstName: name, lastName, age: years = 30 } = user       //? Деструктерицация, вытягивает свойства из обьекта и давать им собственый имена и значания по умолчанию

// console.log(firstName, lastName, age);
console.log(name, years);                                      // вызываем по присвоеной переменной name, firstName теперь недоступен


// с вложеными обьектами

const user2 = {
    firstName: 'Denis',
    lastName: 'Vescheryakov',
    age: 25,
    info: {
        work: 'EasyCode',
        skills: ['html', 'css'],
    },
}

const { 
    info: { work, skills }                                  // свойства из вложеного обьекта
} = user2                                                         

console.log(work, skills)

//---------------------------------------------------------------------------------
//! Деструктерицация массивов

const colors = ['white', 'black', 'red']
const [w, b, red, green = 'green'] = colors                   // даем любые имена в порядке очере

console.log(w, b, red, green)

const names = ['Denis', 'Ivan', 'Maksim']
// const [, name2, name3] = names                        // пропускаем первое значение
// console.log(name2, name3)                             // Ivan Maksim

const [, , name3] = names                                // пропускаем первое,второе значение
console.log(name3)                                       // Maksim
//----------------------------------------
// Вложеные обьекты, массивы

const nestedArr = ['hello world', ['key', 'value']]
const [, [key, value]] = nestedArr

console.log(key, value)                                  // key value

//---------------------------------------------------------------------
// Операторы rest             
// используется чтобы получить остаток от массива или при копировании массивов

const names2 = ['Dima', 'Olya', 'Vasya']
const [name1, ...otherNames] = names2                  // получаем первый элемент, а остальные получаем в массиве
console.log(name1, otherNames);                        // Dima (2) ['Olya', 'Vasya']
// скопировать массив (не глубокое копирование)
const [...newNames] = names2
console.log(newNames);                                 // копия массива users2

const newNames2 = [...names2]                           // в отличии от пред. он разкладывает каждый элемент в новый массив
console.log(...newNames2);                              // выводим через ... не как массив

// Склеивание массивов --------------------------------------------------

const colorNames = ['some value',...colors, ...names]   // склеили два массива и добавили 'some value'
console.log(colorNames)

//------------------------------------------------------------------------
//! копирование обьектов

const newUser = { ...user }                          // копируем обьект (поверхносное копирование, вложеные обьекты не копируются, а передаются по ссылке)
console.log(user);
console.log(newUser);

const newUser2 = { ...user, age: 30 }               // сначала свойсвво age заменит свойство в user, потом скопируется в новый обьект
console.log(newUser2);

//---------------------------------------------------------------------------
//! Смешаная Деструктерицация

const user33 = {
    firstName: 'Max',
    lastName: 'Vescheryakov',
    age: 25,
    info: {
        work: 'EasyCode',
        skills: ['html', 'css'],
    },
}


console.log(user33.firstName)


const {
    info: {
        skills: [html, css2],
    },
} = user33

console.log(html, css2)                                                    //? получание значений из вложеных элементов
        
// ----------------------------------------------------------------------------------
//! Деструктерицация в рамках функции


const uzver = {
    name16: 'mazafaka',
    nameTwo: 'fi',
    age: 19,
    info: {
        work: 'EasyCode',
        skills: ['html', 'css'],
    },
}

// function myPerents( {name16 = '&', nameTwo = '&', info: { skills } = {} } = {}) {  // если не передан обьект, нужно поставить значание по умолчанию ={}
//     console.log(name16, nameTwo);
    
// }
// myPerents()

function myPerents( {name16 = '&', nameTwo = '&', info } = {}) {  // передаем параметры, и значения по умолчанию, которые будут отображаться если не передавать обьект
    console.log(name16, nameTwo, info);                          // теперь можно обращаться к ключам по именам
    
}
myPerents(uzver)

//---------------------------------------------------------------------------------
//! получить все аргументы внутри функции в виде массива   (arguments)

function foo(x, y) {
    console.log(arguments)                  //? arguments содержатся все аргументы переданые в функцию
    const [...args] = arguments             //? получаем копию наших аргументов в виде массива
    console.log(args)                       
}
foo(1, 2)
//------------------------------------
function foo2(x, y, ...others) {
    const [...args] = arguments             // другие аргументы сохраняем в отдельный массив
    console.log(others);
    
}
foo2(1, 2, 4, 5, 66)
//-------------------------------------
const numbers = [2, 3]
function foo3(x, y) {
    console.log(x, y)
}
// foo3(numbers[0], numbers[1]) // чтобы так не писать
foo3(...numbers)                 // каждый элемент массива попадет на свое место
//-------------------------------------



//==================================================================================
// Spread

const arrey = [1, 2, 3, 5, 8, 13]
// console.log(...arrey);               // разворачивает массив // 1 2 3 5 8 13

console.log(Math.max(...arrey))         // находим макс число с помощью Spread // 13
console.log(Math.min(...arrey))         // находим мин число с помощью Spread // 1

// можем клонировать массивы

const fib = [1, ...arrey]

console.log(fib);                       // [1, 1, 2, 3, 5, 8, 13]


//==============================================================================

// Destructuring
const arrey2 = [1, 2, 3, 5, 8, 13]
// const a = arrey[0]
// const b = arrey[1]
// console.log(a);                            // 1
// console.log(b);                            // 2

// const [a, b = 42, ...c] = arrey                  // дали b значение по умолчанию = 42
// console.log(a, b, c);                            // 1, 2, [3, 5, 8, 13]

const [a,, c] = arrey
console.log(a, c);                                // пропустили b // 1, 3





//=============================================================================
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