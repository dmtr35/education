// всплытие события
const btn = document.querySelector('.btn')        // находим элемент по классу
const wrap = document.querySelector('.wrap')


// кнопка ждется и на родительском классе, чтобы ее отключить можно использовать метод e.stopPropagation()
btn.addEventListener('click', e => {     
    e.stopPropagation()             // отменяет срабатывание родительской кнопки, при нажатие на эту 
    console.log('click btn');
})

wrap.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click wrap');
})

document.body.addEventListener('click', e => {                      // подключили body прочто через document 0_0
    console.log('click body')                        
})







// погружение

// btn.addEventListener('click', e => {     
//     // e.stopPropagation()             // отменяет срабатывание родительской кнопки, при нажатие на эту 
//     console.log('click btn');
// })

// wrap.addEventListener('click', e => console.log('click wrap'))            // добавляем 2собития без перехватом погружения
// document.body.addEventListener('click', e => console.log('click body'))

// wrap.addEventListener('click', e => {
//     // e.stopPropagation()
//     console.log('click wrap');
// }, { capture: true })

// document.body.addEventListener('click', e => {                      // подключили body прочто через document 0_0
//     console.log('click body')                        
// }, { capture: true })