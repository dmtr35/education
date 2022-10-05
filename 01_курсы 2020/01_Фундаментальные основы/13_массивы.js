// массивы

const numArr = [2, 32, 1234, 54, 323]

let value

value = numArr.length

value = Array.isArray(numArr)                 // true // проверка на массив это массив
value = numArr[2]                             // получить елемент массива по индексу
// numArr[2] = 12                             // перезаписать значение индекса
value = numArr.indexOf(32)                    // 1 // метод индексов. ищим число 32. нашло на 1 елементе массива
value = numArr.push(100)                      // метод добавляет в конец массива
value = numArr.pop()                          // метод pop удаляет с конца один элемент массива // в value мы получим сам элемент
value = numArr.unshift(111)                   // метод добавляет в начало элемент массива
value = numArr.shift(111)                     // удаляет с начала массива один элемент
value = numArr.slice(0, 2)                    // обрезает часть массива. принимает стартовое и конечное занчение. не включая конечное // если ни чего непередать, вернет копию массива
value = numArr.splice(1, 2, 'one', 'two')     // меняет массив  // для работы с массивами. принимает стартовый индекс и удаляемый элемент. на их место можно вставить другие элементы
value = numArr.splice(1, 0, 'one', 'two')     // на удаляемый индекс пишем 0. и ничего не удалится, а просто добавим элементы
value = numArr.reverse()                      // переворачивает массив // возвращает перевернутый, меняет массив
value = numArr.concat(1, 2, 3)                // метод делает копию массива // можно скопировать и добавить в конец элементы массива
// value = [].concat(1, 2, 3)                 // на пустом массиве
value = numArr.join(' ')                      // делает из массива строку, принимая разделитель, если разделитель не перден вернет в виде строки через запятую
value = 'Hello word'.split()                  // из строки сделать массив
value = 'Hello word'.split('')                // разбивка по символам
value = 'Hello word'.split(' ')               // разбивка по словам


console.log(value)
console.log(numArr)

let str = 'Hello world'
const reversStr = str
	.split('')            // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
	.reverse()            // ['d', 'l', 'r', 'o', 'w', ' ', 'o', 'l', 'l', 'e', 'H']
	.join('')             // dlrow olleH
// console.log(reversStr)

//=======================================================================

const mageArr = ['woman;', 'man;', 'Fish;', 'nut;', 'bird;', 'Hamster;', 'Cat;', 'Dog;', 'myArr']
mageArr.forEach(pet => console.log(pet)) 


function filter_list(l) {
    return l.filter(Number.isFinite)              // фильтруем на числа, с нулями и без числовых строк
}
// console.log(filter_list([1,'0','101',0, 15]))


















