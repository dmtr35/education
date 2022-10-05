// proxy это класс позволяющий добавлять ловушки на любые обьекты

const validator = {
    // get будет отслеживать получение данных из нужного нам обьекта
    get(target, prop) {
        return prop in target ? target[prop] : `Поля ${prop} в обьекте нет`  // если свойство находится в обьекте target тогда буду возвращать target[prop], а иначе :...
    },
    
    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        }
    },
}

const from = {
    login: 'tester',
    password: '12345'
}

const fromProxy = new Proxy(from, validator)  // первый параметр обьект за которым необходимо следить, вторым обьект proxy хендлеров(тех ловушек которые характерны для прокси)

// console.log(fromProxy);                        // { login: 'tester', password: '12345' }
// console.log(fromProxy.login);
// console.log(fromProxy.password);
// console.log(fromProxy['username']);            // несуществующее поле // Поля username в обьекте нет

// fromProxy.password = '123'                       // изменить пароль на '123' // 
// console.log(fromProxy.password);



function log(message) {
    console.log('[Log]: ', message);
}


const proxy = new Proxy(log, {                                      // ставим ловушки на функцию log (ее не нужно вызывать)
    apply(target, thisArg, argArray) {                              // если мы вызываем функцию log, то вызовится метод apply(функ которую мы хотим вызвать, контекст, массив параметров)
        if (argArray.length === 1) {                               // если массив параметров равняется 1
            Reflect.apply(target, thisArg, argArray)               // тогда с помощью Reflect.apply вызываем этот метод
        } else {
            console.log('Количество аргументов не совпадает');
            
        }
    }
})

proxy('Custom message')                          // [Log]:  Custom message
proxy('Message', 2)                              // Количество аргументов не совпадает









