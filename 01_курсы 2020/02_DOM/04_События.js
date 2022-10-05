// События

// событие это любое проишествие которое может произойти в браузере, которое может сделать пользователь(клики, скрол, сабмит-данные...)

const btn = document.querySelector('button')
const link = document.querySelector('a')
// console.dir(btn);            
// btn.onclick = function() {      // метод не используется
//     console.log('click');
// }

//=============================================================
//! addEventListener() принимает 3 аргумента, (тип события, обработчик события(function), обьект с настройками)
// btn.addEventListener("click", e => {                // каждый обработчик принимает обьект событие(e)
//     console.log(this)
//     console.log(e)
// })    
//==============================================================

//! кнопка на ссылку
// function clickhendler(e) {
//     e.preventDefault()               // не будет происходить перезагрузка страници при нажатии на ссылку
//     console.log(this)
//     console.log("click")
// }
// link.addEventListener("click", clickhendler)



//==========================================================
//! мы можем удалять события с элементов, для этого есть метод removeEventListener("название события", "название обработчика события")
// link.removeEventListener("click", clickhendler)

//=========================================================

//! делегирование события  // добавляем динамически элементы на страницу

const container = document.querySelector('.container')

btn.addEventListener('click', (e) => {
    const div = document.createElement("div")
    const nestedBtn = document.createElement('button')
    div.textContent = Math.random()
    nestedBtn.textContent = "button"
    div.appendChild(nestedBtn)
    container.appendChild(div)
})

// на динамически добавленый элемент отслеживать события
container.addEventListener('click', (e) => {
    console.dir(e.target);
    if (e.target.tagName === "BUTTON") {
        console.log('clicked');
    }
})








