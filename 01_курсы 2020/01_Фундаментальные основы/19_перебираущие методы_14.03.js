// основные перебираущие методы


const users = [
{
_id: "hdfhdfj2478dcjhbcjfvjh7837",
index: 0,
isActive: false,
balance: 2397.64,
age: 39,
name: "Lucile",
gender: "female",
company: "ZQXY",
email: "Lucile@zoxy.com",
phone: "+1 (842) 566-3328",
registered: "2015-07-12T09:39:03 -53:00"
},
{
_id: "dfvfdbgdhgfhbgnhdhgbfgfgft45t45",
index: 1,
isActive: true,
balance: 965.32,
age: 14,
name: "Den",
gender: "male",
company: "ddx",
email: "Den@ddx.com",
phone: "+3 (842) 333-4545",
registered: "2020-07-12T09:39:03 -65:00"
},
{
_id: "fgbgbfgbtjrrdr4tgbffbgbg hnhn",
index: 2,
isActive: false,
balance: 4428.26,
age: 25,
name: "Vasya",
gender: "male",
company: "sony",
email: "Vasya@sony.com",
phone: "+5 (842) 566-1111",
registered: "2009-07-12T09:39:03 -06:00"
},
{
_id: "54455545gfbgf45gttb454grg",
index: 3,
isActive: true,
balance: 886.36,
age: 36,
name: "Ira",
gender: "female",
company: "loll",
email: "Ira@loll.com",
phone: "+8 (842) 566-5888",
registered: "2011-07-12T09:39:03 -11:00"
},
{
_id: "fgbb3455343454556644gfd",
index: 4,
isActive: false,
balance: 1020.88,
age: 18,
name: "Kik",
gender: "male",
company: "samsung",
email: "Kik@samsung.com",
phone: "+0 (842) 685-8899",
registered: "2005-07-12T09:39:03 -08:00"
},
{
_id: "dgbfgb23434344tfr45f4545gfrfrg",
index: 5,
isActive: false,
balance: 2658.32,
age: 56,
name: "Fox",
gender: "male",
company: "lg",
email: "Fox@lg.com",
phone: "+9 (842) 555-8696",
registered: "2018-07-12T09:39:03 -05:00"
},
]


// forEach
// filter
// map
// reduce
// some/every
// sort
// find


// forEach

// users.forEach((user, i, arr) => {
//     console.log(user, i, arr)
// })
// users.forEach(user => {
//     console.log(user)
// })


// filter

const userLess30 = users.filter(user => user.age < 30)
// console.log(userLess30)

const userActive = users.filter(user => user.isActive)
// console.log(userLess30)

const userActive2 = users.filter(user => !user.isActive)
// console.log(userActive)

// const userActive = users
//     .filter(user => user.gender === 'male')
//     .filter(user => user.balance > 1000)
//     .filter(user => user.age > 18)
// console.log(userActive)

const userActive3 = users
    .filter(user => user.gender === 'male' && user.balance > 1000 && user.age > 18)
//     // .filter(user => user.balance > 1000)
//     // .filter(user => user.age > 18)
// console.log(userActive3)



// map

const usersName = users
    .filter(user => user.age < 30)
    // .map(user => user.age)
    .map(user => ({name: user.name, age: user.age, balance: user.balance}))
const totalBalanceReduce = usersName
    .reduce((acc, user) => (acc += user.balance), 0)

const usersName2 = users.map(user => ({name: user.name, age: user.age}))     //! передаем несколько полей
// console.log(usersName)
// console.log(totalBalanceReduce)
// console.log(usersName2)






// reduce     принимает 2 аргумента, callback и стартовое значение(если не передано, считается первый элемент массива)
// плюсуем балансы пользователей
const totalBalance = users.reduce((acc, user) => {
    // console.log(acc)
    return acc += user.balance
}, 0)

// console.log(totalBalance)


const totalBalance2 = users.reduce((acc, user) => (acc += user.balance), 0)

// console.log(totalBalance2)

// ? так же reduce можно сформировать из массива обьект

const userObj = users.reduce((acc, user) => {
    acc[user._id] = user
    return acc
}, {})                                                // в качестве стартового значения передаем пустой обьект


// console.log(userObj);


// some/every

// some возвращает true или false если хотябы для одного элемента массива callback вернет true
// every проверяет что каждый элемент соответствует

const inMale = users.some((user) => user.gender === 'male')         // true
const inAllMale = users.every((user) => user.gender === 'male')     // false
const isAll18 = users.every((user) => user.age > 18)                // false

// console.log(inMale);
// console.log(inAllMale);
// console.log(isAll18);



// find дает возможность найти какой то элемент в массиве

const user = users.find(user => user.name === 'Ira')

// console.log(user);


// метод сортировки
// Sort
// он изменяет исходный массив, сортирует по умолчанию по ликсическому значению(как строки)
const strArr = ['Denis', 'Bill', 'Anna']
strArr.sort()
const numArr = [101, 7, 44, 32, 1, 56, 84, 96, 74.5, 85, 1010]
numArr.sort((prev, next) => prev - next)                          // сортируем числа по очередно

// console.log(strArr);
console.log(numArr);

users.sort((prevUser, nextUser) => prevUser.age - nextUser.age)   // сортируем массив по возрасту

console.log(users);










