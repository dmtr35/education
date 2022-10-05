// kat 9

const arr = [['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
// console.log(arr[0][0]);
// console.log(arr[0][1]);
// console.log(arr[1][0]);

// function kat(arr) {


    const arrX = []
    // let n = 0
    for (let i = 0; i < arr.length; i++) {
        for (let n = 0; n < arr[i].length; n++) {
            // console.log(i);
            // console.log(n);
            
            arrX.push(arr[i])
        // const arrZ = []
        // for (let n = 0; n < arrX.length; n++)
        //     arrZ.push(arr[n])
            console.log(arrX)
    }
}
// console.log();



    

// console.log(kat(arr))


// const newPeople = people.map(pers => {
//     return pers.name
// })

// console.log(newPeople);




/* kat 8
Вам будут предоставлены две строки 'a', 'b' состоящие из строчных букв, в строке 'a' не более одной звездочки. 
Звездочку (если есть) можно заменить произвольной последовательностью (возможно, пустой) строчных букв. 
Ни один другой символ строки 'a' не может быть заменен. Если можно заменить звездочку в 'a' для получения строки 'b', то строка 'b' соответствует шаблону.

Если строка совпадает, вернуть true, else false.

For example:
solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string. 
solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string. 
solve("codewars","codewars") = true, because the strings already match.
solve("a","b") = false
solve("*", "codewars") = true
*/

// function solve(a, b){
//     if (a === b) {
//         return true
//     }
//     if (a.indexOf('*') === -1) {
//         return false
//     }
//     if (a.length -1 === 0) {
//         return true
//     }
//     let aArr = a.split('')
//     let bArr = b.split('')
//     let [...aArrCopy] = aArr
//     let [...bArrCopy] = bArr
//     let aStart = []
//     for(let i = 0; i < aArr.indexOf('*'); i++) {
//             aStart.push(aArr[i])
//     }
//     aArrRevers = aArrCopy.reverse()
//     bArrRevers = bArrCopy.reverse()
//     let aEndReserv = []
//     for(let i = 0; i < aArrRevers.indexOf('*'); i++) {
//             aEndReserv.push(aArrRevers[i])
//     }
//     aEnd = aEndReserv.reverse()
//     aStartString = aStart.join('')
//     aEndString = aEnd.join('')
//     if (aStartString === aEndString) {
//         return false
//     }
//     if ((b.startsWith(aStartString) && b.endsWith(aEndString))) {
//         return true
//     } else return false
// }   
    
// console.log(solve("a","aa"))











    
    
// }
// function solve(a, b){
//     if (a === b) {
//         return true
//     }
//     let aArr = a.split('')
//     let bArr = b.split('')
//     console.log(a)
//     console.log(b)
//     console.log('-----------------')
//     let [...aArrCopy] = aArr
//     let [...bArrCopy] = bArr
//     console.log(aArrCopy)
//     console.log(bArrCopy)
//     console.log('-----------------')
//     for (let i = 0; i <= bArr.length-1; i++) {
//         if (aArr[i] === bArr[i]) {
//             aArrCopy.shift()
//             bArrCopy.shift()
//         }        
//     }
//     aArrRevers = aArrCopy.reverse()
//     bArrRevers = bArrCopy.reverse()
//     let [...aArrCopyRevers] = aArrRevers
//     let [...bArrCopyRevers] = bArrRevers
//     console.log(aArrCopyRevers)
//     console.log(bArrCopyRevers)
//     console.log('-----------------')
//     for (let i = 0; i <= bArrRevers.length-1; i++) {
//         if (aArrRevers[i] === bArrRevers[i]) {
//             aArrCopyRevers.shift()
//             bArrCopyRevers.shift()
            
//         }        
//     }
//     aArrFinal = bArrCopyRevers.reverse().join('')
//     console.log(aArrFinal);
//     console.log(b);
//     console.log('-----------------')
//     if (b.indexOf(aArrFinal)) {
//         return true    
//     }
    
// }



// value = numArr.shift(111)                     // удаляет с начала с=массива один элемент
    
    
// console.log(str.startsWith('Helo'))              // ищет в начале строки
// console.log(str.endsWith('Denis'))                 // ищет в конце строки    
    
    


// console.log(a.length -1)

// const a = 'code*s'
// const b = 'codewars'


// console.log(a)

// console.log(a[0]);















/* kat 7
Возьмите целое число n (n >= 0)и цифру d (0 <= d <= 9)как целое число.

Возведите в квадрат все числа k (0 <= k <= n)от 0 до n.

Подсчитайте количество цифр, dиспользованных при написании всех k**2.

Вызовите nb_dig(или nbDig или...) функцию, принимающую nи dв качестве параметров и возвращающую это количество.
*/


// function nbDig(n, d) {
//   let arr = []
//   let str = ''
//   for (let k = 0; k <= n; k++) {
//     arr.push(k**2)
//     console.log(arr)
//   }
//   str = arr
//     .join('')                                                             // делает из массива строку, принимая разделитель, если разделитель не перден вернет в виде строки через запятую
//     .split('')                                                            // из строки сделать массив, '' - разбивка по символам
//     console.log(str)
//     const filteredNumbers = str.filter(Number => Number == d).length      // фильтруем по числам равным d и выводим воличество элементов в массиве 
//   console.log(filteredNumbers)
// return filteredNumbers  
// }
// nbDig(5, 1)





/* kat 7
В этом ката вы создадите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.
Пример
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// function filter_list(l) {
//     let arr = l.filter(Number.isFinite)             // оставляет только цифры
//     return arr
// }
// console.log(filter_list([1,'a','b',0,15]))          // [1, 0, 15]





/* kat 8
Создайте функцию, которая конвертирует доллары США (USD) в китайские юани (CNY). Ввод представляет собой сумму в долларах США в виде целого числа, а вывод должен представлять собой строку, в которой указывается сумма в юанях, за которой следует «китайский юань».

Примеры (ввод -> вывод)
* 15  -> '101.25 Chinese Yuan'
* 465 -> '3138.75 Chinese Yuan'
Коэффициент конверсии, который вы должны использовать, составляет 6,75 китайских юаней за каждый 1 доллар США. Все числа должны быть представлены в виде строки с двумя десятичными знаками. (например, "21.00", НЕ "21.0" или "21")
*/

// function usdcny(usd) {
//     let Yuan = (usd * 6.75).toFixed(2)    
//         return `${Yuan} Chinese Yuan`    
//     }
// console.log(usdcny(10))                 // 67.50 Chinese Yuan




/* kat 8
Мы реализовали функцию wrap(value), которая принимает значение произвольного типа и заключает его в новый объект JavaScript или Python Dict, устанавливая ключ «value» в новом объекте или Dict в переданное значение.

Так, например, если мы выполним следующий код:

wrapper_obj = wrap("my_wrapped_string"); 
 # wrapper_obj should be  {"value":"my_wrapped_string"}
Тогда мы ожидаем, что следующее утверждение будет истинным:

wrapper_obj["value"] == "my_wrapped_string"
К сожалению, код не работает так, как задумано. Пожалуйста, исправьте код, чтобы он работал как указано.
*/

// function wrap(value) {

//     const wrapper_obj = {
//       value: value
//     };
//     return wrapper_obj    
//   }





/* kat 8
Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом, 
только когда каждый сорвет по цветку. Если у одного из цветов четное количество лепестков, 
а у другого нечетное количество лепестков, это означает, что они влюблены.

Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true, 
если они влюблены, и false, если нет.
*/

// function lovefunc(x, y){

//   if ((x % 2 === 0) === (y % 2 === 0)) {
//       return false
// } else {
//   return true
// }
// }
// console.log(lovefunc(2, 3));   // true





/* kat 8
Бобу нужен быстрый способ вычисления объема прямоугольного параллелепипеда с тремя 
значениями: length, widthи heightпрямоугольного параллелепипеда. Напишите функцию, 
которая поможет Бобу в этом вычислении.*/

// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//       const sum = (length * width * height)
    
//     return sum
//   }
// }

// console.log(Kata.getVolumeOfCuboid(2, 2, 2))  // 8





/* kat 8
Завершите функцию, которая принимает неотрицательное целое число n в качестве входных данных 
и возвращает список всех степеней 2 с показателем степени от 0 до n( включительно ).
*/

// function powersOfTwo(n){
//     const arr = [];
//     for (let i = 0; i <= n; i++) {
//      arr.push(2**i);
//     }
//     return arr;
// }
// console.log(powersOfTwo(5));     // (6) [1, 2, 4, 8, 16, 32]




























