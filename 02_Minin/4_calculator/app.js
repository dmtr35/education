const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const output = document.querySelector('#output')


function getImputValues() {
    const value1 = +num1.value                  // в input хранится значение велью (значение которое прописано в input)
    const value2 = +num2.value
    console.log(value1);
    

    return [value1, value2]
}   

function addHandler() {
    // debugger
    const values = getImputValues()
    console.log(values);
    
    const result = values[0] + values[1]
    displayResult(result)                                  
}

function subHandler() {
    const values = getImputValues()
    const result = values[0] - values[1]
    displayResult(result)

}

function displayResult(result) {
    output.closest('.card').style.display = 'block'               // вывести свойства output
    output.innerHTML = `Результат = ${result}`
    console.trace()
    
}

addBtn.addEventListener("click", addHandler)
subBtn.addEventListener("click", subHandler)



setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}, 2000)













