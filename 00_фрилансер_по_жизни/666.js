

























const btnPlusPopup = document.querySelector('.btn')
btnPlusPopup.addEventListener("click", fileInput)


// function fileInput() {
//     let file = document.querySelector('.custom-file-input').files[0]
//     console.log(file);
//     let reader = new FileReader()
    
    
//     reader.readAsText(file)
//     reader.onload = function() {
//         console.log(reader.result);
//         const result = reader.result
//         console.log(result);
//     }
// }






export async function fileInput() {
    let file = document.querySelector('.custom-file-input').files[0]
    console.log(file);
    let reader = new FileReader()

    reader.readAsText(file)
    reader.onload = () => {
        console.log(reader.result);
    }
}















