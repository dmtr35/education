

// в обьекте window метод getComputedStyle, он возвращает нам стили элемента переданного сюда
// передаем document.documentElement, это корневой элемент html. и вызываем метод getPropertyValue в который передаем название нашей переменной("--box-bg")
console.log(window.getComputedStyle(document.documentElement).getPropertyValue("--box-bg"));     // black

console.log(window.getComputedStyle(document.body).getPropertyValue("--box-bg"))  // тоже black. там нам переменная тоже доступна



// если мы хотим получить у какогото конкретного элемента значение переменной..
//..нужно отбатиться непосредственно к элементу к свойству style и вызвать метод getPropertyValue. и передать название переменной
console.log(document.body.style.getPropertyValue("--box-bg"))  // ни чего не получим, нужно сначала этому элементу задать какое то значение этой переменной


console.log(document.body.style.setProperty("--box-bg", "red"))   // указать (название, значение). засетив эту переменную мы поменяли глобальную переменную


console.log(document.querySelector(".box").style.setProperty("--box-bg", "green"));














