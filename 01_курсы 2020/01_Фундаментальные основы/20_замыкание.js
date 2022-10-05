// замыкание
// замыкание это функция которая ссылается на свободные переменные
// свободные перемынные это все переменные которые небыли передыны этой функции как параметры
// и не были обьявлены внутри этой функции как локальные переменные

// функция определенная в замыкании запоминает то окружение в котором она была создана
// и имеет к нему доступ, так же она имеет доступ к окружению выше и может получать различные переменные из родительской функции




function getFullName(firstName, lastName) {
    // console.log(firstName, lastName);
    return function() {
        return `${firstName} ${lastName}`
    }
}

const getname = getFullName('Den', 'Gus')
// console.log(getname());



function updeteValue(val = 0) {
    let x = val
    // console.log(x);
    
    return function(num = 0) {
        return (x += num)
    }
}

const updVal = updeteValue(2)
const updVal2 = updeteValue(4)

// console.log(updVal(1));
// console.log(updVal(0));
// console.log(updVal2(2));
// console.log(updVal2(2));



function checkCred() {
    const login = 'test'
    const password = 'somePassword'

    return {
        checkLogin(value) {
            return login ===value
        },
        checkPassword(value) {
            return Password === value
        },
    }
}





















