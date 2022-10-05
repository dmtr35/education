// queryselector возвращает первый подходящий элемент к указаному селектору
const div = document.querySelector('div')
// полученая колекция через querySelectorAll это снимок наших DOM узлов (это не живая колекция)(не изменяется при изменении DOM)(отображают то что было получено при вызове метода)
const titles = document.querySelectorAll('h1')

console.log(div);
console.dir(div);                        // посмотреть в виде обьекта
console.dir(titles);                     // NodeList список элементов подходящий под наш селектор
console.log(Array.from(titles));         // элементы в виде массива
console.log([...titles]);                // элементы в виде массива



// HTMLCollection это живый колекции, изменяются при изменении DOM
const h1 = document.getElementsByTagName('h1')
console.log(h1);

//--------------------------------------------------------------
// узлы

console.log(div.nextSibling);                     // #text // вернет следующий узел после этого <div>
console.log(div.nextElementSibling);              // вернет следующий элемент 

console.log(div.firstChild);                      // первый текстовый узел который находится внутри <div>
console.log(div.firstElementChild);              // ссылка которая находится внутри текста <div> (первый дочерний элемент)


console.log(document.body.firstChild.nextSibling)             // вывод в консоль следующего узла этого <body>
console.log(document.body)                                 // получим все тело документа <body>
console.log(document.links)                            // получим html колекцию всех ссылок которые есть на странице <links>
console.log(document.forms)

// узлом может быть любой текст или коментарий

//---------------------------------------------------------
console.log('=============================================')
// BOM - глобальные переменные которые нам предоставляет браузер

console.log(window)                             // alert, setTimeout и тд
console.log(navigator)                          // наш браузер
console.log(location)                           // 

//===============================================================
console.log('=============================================')

// как получить родительский элемент или ближайшего родителя

console.log(div.parentElement);                       // хранится ссылка на прямого родителя этого <div>
// console.log(div.parentNode);


const link = div.querySelector('.link');             
console.log(link);                               // элемент в которой будет находится наша ссылка
console.log(link.parentElement);                 // можем получить div, прямой родитель
console.log(link.closest('.content'));           // передаем селектор элемента который мы хотим найти ".content"

// parentElement возвращает прямого родителя, а closest возвращает ближайшего родителя с указаным селектором(это может быть на уровень выше оберточные элементы)





