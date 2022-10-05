





function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}





const btnColor = document.querySelector('.btn-color')


btnColor.addEventListener("click", randCol)

function randCol() {

    event.preventDefault()
    // document.getElementById('text-color').innerHTML = ''
    const color_1 = randomColor()
    const color_2 = randomColor()
    console.log(color_1);
    console.log(color_2);
    
    const bd = document.querySelector('.body')
    
    bd.style.backgroundImage = `linear-gradient(to right, ${color_1}, ${color_2})`
    
    const text = document.createElement("div")
    text.classList.add("text-color")
    text.style.color = "black"
    text.textContent = (`CLICK THE BUTTON BELLOW TO GENERATE A RANDOM GRADIENT HEX COLOR COMBINATION background: linear-gradient(to right, ${color_1}, ${color_2})`)
    
    
    
    bd.append(text)
    
  
}

