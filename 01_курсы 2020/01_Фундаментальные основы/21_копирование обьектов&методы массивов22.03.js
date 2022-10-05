// копирование обьектов методы массивов

let obj1 = {
	name: 'Denis'
}
let obj2 = {
	age: 20,
	name: 'Maxim'
}

// let newObj = obj1 // это не копирование, а ссылание ссылки(если мы изменяем один обьект, меняется и второй)

// newObj.name = 'Den'

// console.log(newObj)             // {name: 'Den'}
// console.log(obj1)               // {name: 'Den'}
// console.log(newObj === obj1);   // true



// копирование
// let newObj =Object.assign(obj1, obj2)         //! obj2 скопировался в obj1. потом obj1 присвоился по ссылке в newObj.
// console.log(newObj === obj1)            // true


 let newObj1 = Object.assign({}, obj1, obj2)    //! первый аргумент 'target', обьект в который мы хотим копировать, вторым 'source' любое количество обьектов из которых хотим копировать
// console.log(newObj1)


//----------------------------------------------------------------



let obj11 = {
	name: 'Olya',
	info: {
		skills: ['html', 'css']
	},
}
let obj22 = {
	name: 'Ivan',
	age: 45,
}

let newObj11 = Object.assign({}, obj22, obj11)
newObj11 = Object.assign({}, obj11)                   // если есть вложеный обьект не делается глубокое копирование. если есть вложеные обьекты они копируются по ссылку
// newObj11
// console.log(JSON.stringify(obj11));                    // метод JSON , получаем специальную строку. можем потом это распарсить

// !глубокое копирование с помощью JSON (в два действия)

// let objJson33 = JSON.stringify(obj11)                     // 1. превращаем в JSON обьект который мы хотим скопировать
// newObj11 = JSON.parse(objJson33)                          // 2. потом распарсив его превращаем его в обьекс
// укорачиваем
newObj11 = JSON.parse(JSON.stringify(obj11))   // ! заворачиваем в JSON и сразу распарсиваем. таким образом происходит глубокое копирование обьекта 

// console.log(newObj11)                             // {name: 'Olya', info: {…}}
// console.log(obj11)                                // {name: 'Olya', info: {…}}
// console.log(newObj11.info === obj11.info);        // false  // разные обьекты

//--------------------------------------------------------------------------------

// !методы 

let keys = Object.keys(obj22)             // ['name', 'age'] возвращает ключи обьекта в виде массива. можно дальше продолжать вызывать методы массива, так как это уже массив
console.log(keys);

let values = Object.values(obj22)         // ['Ivan', 45] возвращает значения каждого ключа в виде массива
console.log(values);

let entries = Object.entries(obj22)       // [Array(2), Array(2)] возвращает массив массивов где каждыйм элементом является пара ключ и значение обьекта     
console.log(entries)

let fromEntries = Object.fromEntries([['a', 'value'], ['b', 'b_value']])   // передаем массив массивов ключ и значение и получаем обьект. ключом является первый элемент, а значением второй
console.log(fromEntries);
let fromEntries2 = Object.fromEntries(entries)
console.log(fromEntries2);














