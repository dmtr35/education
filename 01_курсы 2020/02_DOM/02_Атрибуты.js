// атрибуты

const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');


div.classList.add('article', 'custom');                   // добавить class нашему div
div.classList.remove('article');                          // удалить class у нашего div
console.log(div.classList.contains('custom'));            // true  // проверить наличие class
console.log(div.classList.toggle("toggle"))               // true(был добавлен) // переключать класс, если нету - будет добавлен, если есть удален
console.log(div.classList);


console.log(div.className);                               // все классы строкой

//---------------------------------------------------

const link = div.querySelector('.link');             
console.dir(link);                                         // что в самой ссылке
console.log(link.href);                                   // получить ссылку

//---------------------------------------------------



div.setAttribute('id', 'myId');                        //принимает название атрибута и его значение(добавляет в <div> id="myId")
console.log(div.id);                                   // получаем id этого элемента
console.log(div.id = "myId2");                         // перезаписать

console.log(div.getAttribute("id"))                    // получить значение атрибута
console.log(div.hasAttribute("id"))                    // true (проверить наличие атрибута)
div.removeAttribute("id")                              // удаление атрибута
//----------------------------------------------------




// Наш кастомный атрибут "data-myattr"="myCustom value"
/* <div class="content article" data-myattr="myCustom value"> */

console.log(div.dataset.myattr)                       // myCustom value
console.log(div.dataset.myattr = "my a")              // перезапишем

console.log(div.getAttribute("data-myattr"));         // можно так















