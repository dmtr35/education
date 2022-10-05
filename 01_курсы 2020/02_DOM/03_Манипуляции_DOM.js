// Манипуляции_DOM


const title = document.querySelector('h1')    // находим h1 через querySelector
// console.log(title);                           // <h1>Hello world!</h1>


// title.innerHTML = ""                          // свойство .innerHTML (если присвоить пустую строку содержимое будет удалено)
// console.log(title);                           // <h1></h1>

// title.innerHTML = '<span>text</span>'         // добавляем тег <span> и содержимое в него
// console.log(title);                           // <h1></h1>

// title.textContent = 'new text'                // изменяем текстовый контент
// title.appendChild("<span>appen</span>")       // добавлять новые элементы, первый параметр должен быть DOM узел

// добавить содержимое в виде строки
// title.insertAdjacentHTML("beforebegin", '<h2>titel h2</h2>')                // 1й аргумент позиция которую мы хотим вставить         


//--------------------------------------------------
//? опасность использования innerHTML
// title.innerHTML += '<span>new text</span>'
// const span = title.querySelector('span')
// console.log(span);
// title.innerHTML += '<span>new text2</span>'
// span.textContent = 'asdasd'                   // не работает, потому что innerHTML удаляет все существующие обьекты внутри элемента(для которого мы применяем innerHTML) и мы теряем на них ссылки. наш span теперь нигде не находится. он меняется в обьекте, а на странице с ним связь не установлена
//---------------------------------------------------



//! создание элемента (только в javaScrypt, не в разметке)
const span = document.createElement("span")          // не добавляется на страницу, создается только внутри джава скрипта
span.textContent = 'span created by createElevtnt'   // можем создать текстовое содержимое
span.classList.add('myClass')                        // можем добавлять class
console.log(span);

title.appendChild(span)                     //? для того чтобы добавить в разметку будем использовать метод appendChild()
//------------------------------------------------------

//! если нужно добавить множество элементов и добавить их в разметку используем fragment

const fragment = document.createDocumentFragment()       // сздаем фрагмент
console.log(fragment);                             // DOM узел у которого так же можем вызывать методы добавления, удаления..
const color = ["black", "yellow", "orange"]   
color.forEach((color) => {
    const item = document.createElement("div")
    item.classList.add(`bg-${color}`)
    item.style.background = color                  // фоновые цвета
    item.textContent = color
    fragment.appendChild(item)
})

document.body.appendChild(fragment)     //? и теперь передаем наш фрагмент в разметку



//=========================================================
//! удаление элементов
// первый способ
// title.remove()               // вызвать у title метод remove и он будет удален со страници

// второй способ
// title.parentElement.removeChild(title)  // обратиться к родителю(parentElement), removeChild и передать сюда title
// console.log(title);










