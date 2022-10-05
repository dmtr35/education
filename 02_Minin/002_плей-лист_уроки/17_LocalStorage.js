// LocalStorage  
// намного больше чем куки. около 5mb можно хранить в браузере
// куки улетают с запросами на сервер, localStorage это локальное хранилище к которому только мы имеем доступ

const myNumber = 42

// console.log(localStorage.getItem('number'))                 // получить значение из localStorage
// localStorage.setItem('number', myNumber)                   //добавить значение setItem(ключ по которому нужно что-то сохранить, значение)
// console.log(localStorage.getItem('number'))

// console.log(localStorage.removeItem('number'))              // удаляет нужный ключ

// localStorage.clear()                                    // очищаем localStorage



// const object = {
//     name: 'Max',
//     age: 20,
// }

// console.log(localStorage.setItem('Max', JSON.stringify(object)));   // добавляем обьект в localStorage

// const raw = localStorage.getItem('Max')                            // получить значение из localStorage
// console.log(raw);

// const person = JSON.parse(raw)                                   // парсим назад в обьект
// person.name = 'Vladilen'                                        // теперьможем изменить 
// console.log(person);

// localStorage.removeItem(raw)                                   // удаляем ключ
// localStorage.setItem('Max', JSON.stringify(person))            // записываем новое значение



// =====================================================
// если приложение открыто в разных вкладках, можем синхронизировать с помощью специальных событий...
// ...которое может прослушивать обьект window для localStorage
window.addEventListener('storage', event => {                    // добавляем событие addEventListener
    console.log(event);
})

// window.onstorage = () => {}                   // альтернативный способ











