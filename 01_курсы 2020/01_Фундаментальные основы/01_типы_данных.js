












// Типы данных. Есть восемь основных типов данных в JavaScript
// Число
// console.log(2019, 2.5)
// console.log(20 * 'asdasd')
// console.log(1 / 0)


// Строка
// let str = "Привет"
// let str2 = 'Одинарные кавычки тоже подойдут'
// let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`
// console.log(str, str2, phrase)

// Обратные кавычки позволяют нам встраивать выражения в строку, заключая их в ${…
// let name = 'Ivan'
// alert(`привет, ${name}`)
// alert(`результат: ${1 + 2}`)

// Булевой (логический) тип
// let nameFieldChecked = true // да, поле отмечено
// let ageFieldChecked = false // нет, поле не отмечено
// console.log(nameFieldChecked, ageFieldChecked)

// Булевые значения также могут быть результатом сравнений:
// let isGreater = 4 > 1
// console.log(isGreater)
// alert(isGreater)


// Значение «null».Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
// let age = null
// console.log(age)


// Значение «undefined» формирует тип из самого себя так же, как и null.
// let age
// console.log(age)
// alert(age)


// Тип symbol
// console.log(Symbol())


// Оператор typeof. возвращает тип аргумента.
// Синтаксис оператора: typeof x.
// Синтаксис функции: typeof(x).
// console.log(typeof undefined)                  // "undefined"
// console.log(typeof(0))                         // "number"
// console.log(typeof 10n)                        // "bigint"
// console.log(typeof(true)                       // "boolean"
// console.log(typeof 'foo')                      // "string"
// console.log(typeof Symbol('id'))     // "symbol"
// console.log(typeof(Math))                      // "object"  (1)
// console.log(typeof null)                       // "object"  (2) официально признанная ошибка в typeof и сохранённая для совместимости.
// console.log(typeof(alert))                     // "function"  (3)

// Задача. Что выведет этот скрипт?
// let name = "Ilya"
// alert(`hello ${1}`)      // hello 1
// alert(`hello ${"name"}`) // hello name
// alert(`hello ${name}`)   // hello Ilya



// Cсылочный тип - обьекты

// console.log({name: 'Denis', age: 30})
// console.table({name: 'Denis', age: 30})
// Масив
// console.log([1, 2, 3, 4])


// Динамическая типизация (вы можете использовать одну переменную для хранения данных различных типов:)
// var foo = 42
// console.log(typeof foo)    // number
// foo = 'bar'
// console.log(typeof foo)    // string
// foo = true
// console.log(typeof foo)    // boolean





































