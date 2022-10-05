// Числа

// const num = 42        //integer
// const float = 42.42   //float
// const pow = 10e3
//
// // console.log(float)
// // console.log(num)
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow', Math.pow(2,53,) -1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)  // тип NaN
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(42))
// console.log(Number.isFinite(Infinity))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2) // чаще всего используется
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
//
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)                // + перед stringFloat значит преобразовать в число

// -
//
// console.log(0.4 + 0.2)                            // 0.6000000000000001
// console.log((2 / 5) + (1 / 5))                    // 0.6000000000000001
// console.log((0.4 + 0.2).toFixed(1))                  // фиксируем знаки после запятой (строка)
// console.log(+(0.4 + 0.2).toFixed(1))               // добавляем +, парсим в число
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))


// // BigInt
// console.log(Number.MAX_SAFE_INTEGER) // вставляем побученное число ниже
// console.log(9007199254740991999)     // добавляем пару цифр
// console.log(typeof 9007199254740991999)     // number
// console.log(typeof 9007199254740991999n)     // bigint
// console.log(9007199254740991999n - 900719925474099199n)     // 8106479329266892800n
// console.log(-9007199254740991999n)     // отрицательный BigInt
// // console.log(-9007199254740991999n.3232n)     // error

// console.log(10n - 4)  // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)


// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))                           // коринь из чиска
// console.log(Math.pow(5,3))                        // 5 в 3 степени
// console.log(Math.abs(-42))                           // убирает минус
// console.log(Math.max(42, 12, 60, 11, 422))       // максимальное число из списка
// console.log(Math.min(42, 12, 60, 11, 422))       // минимальное число из списка
// console.log(Math.floor(4.6))                        // округляет в нисшую сторону
// console.log(Math.ceil(4.1))                         // округляет в высшую сторону
// console.log(Math.round(4.9))                        // возвращает число, округлённое к ближайшему целому
// console.log(Math.trunc(4.9))                        // возвращает целую часть числа путём удаления всех дробных знаков.
// console.log(Math.sin(5))
// console.log(Math.random())

// 4 Examle Пример
// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
//
// console.log(getRandomBetween(11, 99))

































