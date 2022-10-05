// Переобразование типов

let value
// Number to string
value = String(10)
value = String(10 + 40)
value = (40).toString()                 // точка и круглые скобки называется МЕТОДОМ

// BooLean to string
value = String(true)
// Arroy(МАСИВ) to string
value = String([1, 2, 3])
// Object to string
value = String({name: 'Denis'})

value = 30 + '' + undefined                       // не явное преобразование в строку
value = 30 - 'asdsd'
value = 30 - '5'
value = 30 - ''
value = true + 10
value = false - 10                         // true преобразовуется к 1, num к 0, false к 0
value = false +  undefined                 // undefined преобразовывается в Nan


// String to number
value = Number('23')
value = Number(true)
value = Number(false)
value = Number('false')
value = Number([1, 2, 3])


// функции преобразовывающие к числу
value = parseInt('200asd')                 // для целых чисел
value = parseFloat('200.212ftgh')          // для дробных

// boolean  (специальная функция Boolean)
value = Boolean('hello')                    // любая не пустая строка будет true
value = Boolean('')                         // любая не пустая строка будет false
value = Boolean(100)                        // true
value = Boolean(-100)                       // true
value = Boolean(0)                          // 0 будет false
value = Boolean(NaN)                        // NaN будет false
value = Boolean(undefined)                  // undefined будет false
value = Boolean(null)                       // undefined будет false
value = Boolean({})                         // пустой обьект это всегда true
value = Boolean([])                         // пустой масив это всегда true

// Домашнее задание:
// 1)
value = '4' + 5                    // 45 string
value = '4' - 5                    // -1 number
value = 5 + '4'                    // 54 string
value = 5 - '4'                    // 1 number
value = 8 * '4'                    // 32 number
value = 8 / '4'                    // 2 number
//
// 2)
value = 'gg' + 2 + 3               // gg23 string
value = '' + 2 + 3                 // 23 string
value = 2 + 3 + 'gg'               // 5gg string
value = '' - 3 + 2                 // -1 number
value = '  3  ' + 2                //   3  2 string
value = '  3  ' - 2                // 1 number
//
// 3*)
value = NaN + 2                    // NaN number
value = NaN + NaN                  // NaN number
value = NaN - NaN                  // NaN number
value = null + 2                   // 2 number
value = null + null                // 0 number
value = null - null                // 0 number
value = undefined + 2              // NaN number
value = undefined + undefined      // NaN number
value = undefined - undefined      // NaN number
//
value = '5' +- '2'                 // 5-2 string
value = '5' -+ '2'                 // 3 number
value = 1 == null                  // false boolean
value = 2 / `5`                    // 0.4 number
//
// 4**)
value = ' \n \t' - 2               // -2 number    // \n и \t специальные символы которые обозначают перевод строки и таб, а при приведении строки к числу все пробелы, пропуски строки и табы, то есть различные пустоты обрезаются. Это равносильно пустой строке или строке с пробелам


console.log(value)
console.log(typeof value)











































