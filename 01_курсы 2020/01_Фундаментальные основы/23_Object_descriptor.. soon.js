//! object descriptor    мы можем контролировать свойства и давать им настройки

const car = {
    brand: 'Audi',
    year: 2019,
}

// метотод позволяет опредилить некие настройки для нашего обьекта и для конкретного свойства в нем

Object.defineProperty(car, 'year', {       // 1й параметр обект car, 2й свойство 'year'конфигурировать, 3й дискриптор(имеет некие настройки (по умолчанию они все true)=>...)
    // configurable: false                    // запрещена конфигурация свойства(невозможно удалить, перезаписать можно) 
    enumerable: false



})







// Object.defineProperty(car, 'year', {       
//     enumerable: false 
// })

































