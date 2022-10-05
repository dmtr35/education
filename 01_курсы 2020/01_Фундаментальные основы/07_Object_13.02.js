// Object


const user = {
    firstName: 'Denis',                  // обьект состоит из пар ключ: значение
    age: 30,
    isAdmin: true,
    email: 'test@test.com',
    'user-address': {       // ключи обьекта могут быть обьявлены через 'кавычки', если название поля является сложным
        city: 'Kharkiv'
    },
    skills: ['html', 'css', 'js']                  // Масив в нашем обьекте
}
/*
для того чтобы обратиться к свойствам есть 2 варианта
*/

let value
let prop = 'skills'                         // переменная с названием КЛЮЧА в нашем ОБЬЕКТЕ

value = user.firstName                      // Denis // первый вариант. мы можем обратиться через точку(точка и название свойства)
value = user['isAdmin']                     // true // второй. через []. для спецыфичных ключей. через точку их не получить
value = user['user-address']                // {city: 'Kharkiv'}  // внутри будет обьект
value = user['user-address'].city           // Kharkiv // чтобы получить вложеный свойства в обьекте продолжаем цепочку(через точку или [])
value = user['user-address']['city']        // Kharkiv // тоже самое через ['']
value = user[prop]                          // ['html', 'css', 'js'] // подставляем переменную, будет подставленно 'skills'
value = user[prop][0]                       //html // можем получить тот или иной элемент

// запись свойств в ОБЬЕКТЕ
// для того чтобы перезаписать СВОЙСТВА в ОБЬЕКТЕ через точку или [] :

user.firstName = 'Den'                       // {firstName: 'Den'.. // перезаписали свойства в обьекте

value = user.firstName                       // Den

user.info = 'Some info'                      // если такого СВОЙСТВА нет в нашем ОБЬЕКТЕ => в обьекте будет создано info и добавится значение которое мы укажем

value = user.info                            // Some info

user['user-address'].city = 'Kiev'           // перезаписать значение вложеного ОБЬЕКТА
// user['user-address']['city'] = 'Kiev'        // тоже только через []
user['user-address'].country = 'Ukrain'      // создать значение вложеного ОБЬЕКТА

/*
если мы попытаемся обратиться к свойству которое не существует и в него записать какое-то
СВОЙСТВО, то получим ошибку
*/
// console.log(user.plan)               // undefined // поэтому ниже создается ошибка, не может записать к undefined СВОЙСТВА basic
// user.plan.basic = 'basic'       // ошибка (Cannot set properties of undefined) // запись в несушествуюший обьект => обьект и добавить в него свойства свойства




console.log(value)
console.log(user)
// console.log(typeof user)











// ------------------------------------------------------------------------------------
let complexObj = {
    name: 'Peeta',
    age: 16,
    info: {
        married: false,
        country: 'District 12'
    }
}

console.log(complexObj.info.married)                     // false
console.log(complexObj['info']['married'])               // false
console.log(complexObj['info'].married)                  // false
// ------------------------------------------------------------------------------------
// Массивы. Тоже объекты.
// Внутри массива предпочтительнее использовать данные одного типа (только строки или только числа, или только объекты и т.п.).

let names = ['Vasya', 'Petya', 'Slava']
let products = [ {title: 'Колбаса', price: 25}, {title: 'Хлеб', price: 10} ]
let fibonachi = [1, 2, 3, 5, 8, 13, 21]

// Для того, чтобы обратиться к определённому элементу массива, нужно рядом с именем массива в квадратных скобках указать номер элемента:

console.log(names[0])                                                  // 'Vasya'
console.log(names[2])                                                  // 'Slava'
//
console.log(names.length)                                              // 3 // Длина массива
//---------------------------------------------------------------------------------------
//Массивы. Примеры.
let list = [1, 2, 3, 4]
let collection = ['one', 'two', 'three']
let users = [{name: 'Smith', age: 45}, {name: 'Neo', age: 25}]

console.log(list.length)                           // 4 // длина массива
console.log(collection.length)                     // 3 // длина массива
console.log(users.length)                          // 2 // длина массива

console.log(users[0])                              // {name: 'Smith', age: 45} // обьект
console.log(users[0].name)                         // Smith
console.log(users[1].age)                          // 25
// ---------------------------------------------------------------------------------------
// Объекты. Задача 1. Создать объект с полем product, равным ‘iphone’
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// 3. Добавить поле details, которое будет содержать объект с полями model и color
//
// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
const object = {
    product: 'iphone'
}

object.price = '1000'
object.currency = 'dollar'
object.details = {
    model: '',
    color: ''
}

console.log(object)
// -----------------------------------------------------------------------------------------
// СИНТАКСИС

// Создание обьекта

// let userInfo = new Object()                   // синтаксис 'конструктор обьекта'
let firstPart = 'likes'
let lastPart
let userInfo = {
    name: 'Вася',
    age: 30,                                     // висячая запетая
    // 'likes jawascript': true,
    [firstPart + ' jawascript']: true,           // выше создали переменную и составляем нужное нам имя свойства
    [lastPart]: true                             // передаем в обьект имя переменной
}

// console.log(userInfo)
// console.log(userInfo['name'])
console.log(userInfo['likes jawascript'])
console.log(userInfo[lastPart])

// console.log(users[])

// преимущество квадратных скобок
let key = 'name'
console.log(userInfo[key])
// Зарезервированные слова в именах
let userInfo2 = {
    let: 'Вася',                                 // в обьекте мы можем использовать любые зарезервированые слова
    for: 30,
}
console.log(userInfo2.let)
console.log(userInfo2.for)
// имена = строки либо символы
let userInfo3 = {
    0: 'Вася',                                 // 0 тоже самое что '0'
}
console.log(userInfo3[0])
console.log(userInfo3['0'])

// Тип данных Symbol ( символов отдельный тип даных, уникальный идентификатор)
// Создаем символ id с описанием (именем) 'id'
let id = Symbol('id')                  // символов отдельный тип даных, уникальный идентификатор
let userInfo4 = {
    name: 'Вася',
    age: '30',
    [id]: 'Некое значение',
}
console.log(userInfo4)
// Основные применения символов:
// 1. 'Скрытые' свойства обьектов
//     Символьное свойство не появится в for..in
// 2. Использование системных символов
//    Symbol.iterator, Symbol.toPrimitive и т.д.
//------------------------------------------------------

// Вложеность
let userInfo5 = {
    name: 'Вася',
    age: 30,
    address: {
        city: 'Uzhhorod',
        street: {
            am1: '11',
            am2: {
                am3: 33
            }
        }
    }
}
console.log(userInfo5)
console.log(userInfo5.address)
console.log(userInfo5.address.city)
console.log(userInfo5.address.street.am2.am3)
//--------------------------------------------------------
// Свойство из переменной
function makeUserInfo(name, age) {
    return {
        name: 'name',
        age: age,
        // ... другие свойства
    }
}
let user2 = makeUserInfo('Vasya', 30)
console.log(user2)
console.log(typeof user2)

// можно упростить предыдущую запись ---------------------
function makeUserInfo(name, age) {
    return {
        name,                                             // тоже самое что и name: name
        age,                                              // тоже самое что и age: age
        'likes jawascript': true,            // можно комбинировать и с обычной записью, когда есть свойства обьекта и его значение
        // ... другие свойства
    }
}
let user3 = makeUserInfo('Vasya', 30)
console.log(user3)
console.log(typeof user3)
// ----------------------------------------------------------
// Изменение ОБЬЕКТА
// Добавление свойств
let userInfo6 = {
    name: 'Vasya',
}
console.log(userInfo6)

userInfo6.age = 30                                  // добавляем в обьект

console.log(userInfo6)

userInfo6['likes jawascript'] = true                // добавляем в обьект

console.log(userInfo6)

userInfo6.address = {                               // добавляем в обьект
    city: 'Kiev',
    town: 'Xarkov',
}

console.log(userInfo6)

// ---------------------------------------------------------------

// Удалить свойства (удаляем)
let userInfo7 = {
    name: 'Vasya',
    age: 30,
    'likes jawascript': true,
}

console.log(userInfo7)

delete userInfo7.age                                        // удалить свойства обьекта

console.log(userInfo7)

delete  userInfo7['likes jawascript']                      // удалить свойства обьекта

console.log(userInfo7)
// -------------------------------------------------------------------------

// Изменение свойства обьекта
let userInfo8 = {
    name: 'Vasya',
    age: 30,
}
console.log(userInfo8)
userInfo8.age = 18                                           // Изменение свойства обьекта (присваеваем новое значение)
console.log(userInfo8)
//----------------------------------------------------------------------------

// Изменение свойств даже в константе

const userInfo9 = {
    name: 'Vasya',
    age: 30,
}
console.log(userInfo9)
userInfo9.age = 18                                           // Изменение свойства обьекта (присваеваем новое значение)
console.log(userInfo9)
//---------------------------------------------------------------------------

// Копирование обьектов
// При копировании обьекта в другую переменную
// сам обьект не дублируется, а копируется только ссылка на него
let userInfo10 = {
    name: 'Vasya',
    age: 30,
}
console.log(userInfo10)

let user4 = userInfo10

console.log(user4)

user4.age = 18

console.log(userInfo10)
// -------------------------------------------------------------------------

// дублирование обьектов (Object.assign)
// синтаксис
// Object.assign(куда(обьект), что(свойство #1), что(свойство#2), ...)
let userX2 = {
    rama: 'mila'
}
let userInfo11 = {
    name: 'Vasya',
    age: 30,
}

let user5 = Object.assign({}, userInfo11, userX2)    // (дублируем в новый обьект) ({} - создаем новый пустой обьект и в него копируем свойства из обьекта userInfo11)

user5.age = 18

console.log(userInfo11)
console.log(user5)
console.log(userX2)
// ------------------------------------------------------------------------
// еще про Object.assign

let userInfo12 = {
    name: 'Vasya',
    age: 30,
}
Object.assign(userInfo12, {['likes jawascript']: true, city: 'Kiev' })   // добавляем новые свойства в обьект с помошью Object.assign
console.log(userInfo12)
// ---------------------------------------------------------------------------
// проверка существования наличия свойства обьекта
// сравнение с undefined

let userInfo13 = {
    name: 'Vasya',
    // age: 30,
}
// console.log(userInfo13.age)

if (userInfo.age) {                           // проверяем, если есть выводим, если undefined
    console.log(userInfo13.age)
}
//--------------------------------------------------------------------------
// проверка существования наличия свойства обьекта
// опциональная цепочка

let userInfo14 = {
    name: 'Vasya',
    age: 30,
    address: {
    //     city: 'Kiev',
        street: 'freedom',
    }
}
// console.log(userInfo14.address.city)                          // если бы свойства не было, была бы ошибка
console.log(userInfo14?.address?.city)                           // undefined // опциональная цепочка.
// -----------------------------------------------------------------------------
// проверка существования наличия свойства обьекта
// оператор 'in'
let userInfo15 = {
    name: 'Vasya',
    age: 30,
    address: {
        city: 'Kiev',
        street: 'freedom',
    }
}
if ('name' in userInfo15) {               // проверяем существования обьекта(если 'name' есть в userInfo15, вывести значение, если нет undefined)
    console.log(userInfo15.name)
}
// в большинстве случаев сработает сравнение с undefined либо опциональная цепочка ?.
// Но есть особый случай, когда свойство существует, но содержит значение undefined.
// В этом случае необходимо использовать 'in'.

let userInfo16 = {
    name: undefined,
    // ... след свойства
}

// if (userInfo16.name) {                   // проверка по сравнению с undefined не проходит, так как содержит undefined
//     console.log(userInfo16.name)
// }

if ('name' in userInfo16) {                 // с помощью оператора in получается проверить условие если содержит undefined
    console.log(userInfo16.name)
}

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
// цикл "for...in"

// для перебора всех свойств обьекта используется цикл for..in
// этот цикл отличается от изученого ранее цикла for(;;)

for (let key in object) {              // внутри скобок мы обьявляем переменную, которая будеть содержать имена свойств(ключи свойств in указываем наш обьект)
    // тело цикла выполняется для каждого свойства обьекта
}
// Пример цикл "for...in"

let userInfo17 = {
    name: 'Vasya',
    age: 30,
    address: {
        city: 'Kiev',
        street: 'freedom',
    }
}

for (let key in userInfo17) {
    // ключи
    console.log(key)                              // name, age, address  // выводим ключи, имена СВОЙСТВ с помощью созданой переменной
    // значения ключей
    console.log(userInfo17[key])                 // Vasya, 30, Objekt {} // выводим значения этих СВОЙСТВ с помошью переменной [key]
}

for (let key in userInfo17.address) {            // можем обратится к обьекту внутри обьекта
    // ключи
    console.log(key)                             // city, street // выводим ключи, имена СВОЙСТВ с помощью созданой переменной
    // значения ключей
    console.log(userInfo17.address[key])         // Kiev, freedom // выводим значения этих СВОЙСТВ с помошью переменной [key]
}
//-----------------------------------------------------------------------------

// Методы обьекта
let userInfo18 = {
    name: 'Vasya',
    age: 30,
    address: {
        city: 'Kiev',
        street: 'freedom',
    },
//     showInfo: function () {                                               // ключ showInfo и значение function
//         console.log(`${userInfo18.name}, ${userInfo18.age}лет. Адрес: г.${userInfo18.address.city}, ул.${userInfo18.address.street}`)
// }

    showInfo() {                                                              // укороченый вариант. showInfo() {} как имя функции
        console.log(`${userInfo18.name}, ${userInfo18.age}лет. Адрес: г.${userInfo18.address.city}, ул.${userInfo18.address.street}`)
}

}
userInfo18.showInfo()                      // чтобы вызвать функцию, обращаемся к переменной которой присвоен данный обьект.имя функции()
//-----------------------------------------------------------------------------------

// Методы обьекта

// использование "this" в методах обьекта

let userInfo19 = {
    name: 'Vasya',
    age: 30,
    address: {
        city: 'Kiev',
        street: 'freedom',
    },
    showInfo() {
        // console.log(`${userInfo19.name}, ${userInfo19.age}лет. Адрес: г.${userInfo19.address.city}, ул.${userInfo19.address.street}`)
        console.log(`${this.name}, ${this.age}лет. Адрес: г.${this.address.city}, ул.${this.address.street}`) // словом this можно заменить имя текущего обьекта
    }
}
userInfo19.showInfo()

// еще пример "this" -------------------------------

let userInfo20 = {
    name: 'Vasya',
    age: 30,
    address: {
        city: 'Kiev',
        street: 'freedom',
    },
    showInfo() {
        // function show() {                         // ошибка, this не работает, потому что функция вложеная
        //     console.log(`${this.name}, ${this.age}лет. Адрес: г.${this.address.city}, ул.${this.address.street}`) // словом this можно заменить текущий обьект
        // }

        // У стрелочной фунции нет своего 'this', используется значение из внешнего метода userInfo20.showInfo()
        let show = () => console.log(`${this.name}, ${this.age}лет. Адрес: г.${this.address.city}, ул.${this.address.street}`)
                show()
    }
}
userInfo20.showInfo()

//------------------------------------------------
// Методы обьекта

// преимущество "this"

let userInfo21 = {
    name: 'Vasya',
    age: 30,
    address: {
        city: 'Kiev',
        street: 'freedom',
    },
    showInfo() {
        console.log(`${this.name}, ${this.age}лет. Адрес: г.${this.address.city}, ул.${this.address.street}`) // словом this можно заменить имя текущего обьекта
        // console.log(`${userInfo21.name}, ${userInfo21.age}лет. Адрес: г.${userInfo21.address.city}, ул.${userInfo21.address.street}`)
    }
}
userInfo21.showInfo()


let user6 = userInfo21                                 // копируем ссылку на обьект userInfo21 в новую переменную user6
userInfo21 = null                                      // предыдущую переменную userInfo21 обнуляем
user6.showInfo()                                       // ошибка // пытаемся запустить с помошью нового ключа метод showInfo,
                                                       // но будет ошибка потому что userInfo21 обнулена
                                                       // если запишем с помошью 'this' все будет работать

//-------------------------------------------------------------------------------------------------------------
// функция - конструктор

/*
Обычный синтаксис создания обьекта{... } позволяет создать только один обьект.
Но зачастую нам нужно создать множество однотипных обьектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функций - конструктора и оператора "new"
*/
/*
Функции - конструкторы являются обычными функциями. Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи оператора "new".
*/

function UserInfo(name) {      // Имя функции - конструктора с большой буквы
                              // this = {}; Создается пустой обьект (неявно)
    this.name = name
    this.age = 30
                              // return this; Возвращается обьект (неявно)
}

console.log(new UserInfo('Vasya'))           // new, вызываем функцию UserInfo и передаем туда имя и получаем новый обьект
console.log(new UserInfo('Lena'))
//---------------------------------------------------------------------------------------------------------------

// Домашка
/*
1. Изучить теорию
2. Решить задачи:
*/

//задача 1 (Верна ли запись)
const userInfo101 = {
    name: 'Vasya',                             // не было комы
    age: 30,
}
console.log(userInfo101)
//-----------------------------------------------------------------
// задача 2 (что будет в консоли?)
let userInfo102 = {
    name: 'Vasya',
    age: 30,
    "58": 'Значение свойства'
}
console.log(userInfo102[58])                 // Значение свойства
//----------------------------------------------------------------
// задача 3 (что будет в консоли?)
let userInfo103 = {
    name: 'Vasya',
    age: 30,
}
let user103 = userInfo103
user103.age = 45

console.log(userInfo103.age)                 // 45
//----------------------------------------------------------------
// задача 4 (что будет в консоли?)
let userInfo104 = {
    name: 'Vasya',
    age: 30,
    showInfo() {
        console.log(`${this.name}`)
    }
}
let user104 = userInfo104             // копируем наш обьект в новую переменную
userInfo104 = null                    // обнуляем старую переменную
user104.showInfo()                    // так как мы создали через "this" все будет работать // Vasya
//----------------------------------------------------------------
// Задача 5 (что будет в консоли?)
let userInfo105 = {
    name: 'Vasya',
    age: 30,
}
for (const key in userInfo105) {
    const value = userInfo105[key]
    console.log(value)                   // Vasya, 30 // выводим значения этих СВОЙСТВ с помошью переменной [key]
    // console.log(userInfo105[key])     // тоже самое
    // console.log(key)                  // name, age // выводим ключи, имена СВОЙСТВ с помощью созданой переменной
}
//-----------------------------------------------------------------
// Задача 6 (что будет в консоли?)
let userInfo106 = {
    name: 'Vasya',
    age: 30,
    address: {
        city: 'Kiev'
    }
}
for (const key in userInfo106.address) {
    console.log(userInfo106.address[key])        // Kiev
}
//-----------------------------------------------------------------
// Задача 7 (Верна ли запись)
const userInfo107 = {
    name: 'Vasya',
    age: 30,
    "likes js": true,
}
// console.log(userInfo107."likes js")         // нужно "likes js" без точки взять в ['']
console.log(userInfo107['likes js'])
//--------------------------------------------------------------------
// задача 8
/*
1. Создайте пустой обьект userInfo108
2. Добавте свойство name со значением Vasya
3. Добавте свойство age со значением 30
4. Измените значение свойства name на Lena
5. Удалите свойство name из обьекта
 */

let userInfo108 = {}
userInfo108.name = 'Vasya'
userInfo108.age = 30
userInfo108.name = 'Lena'
delete userInfo108.name

console.log(userInfo108)
// console.log(typeof userInfo108)





