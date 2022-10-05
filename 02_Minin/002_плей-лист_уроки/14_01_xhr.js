// XHR

const requestURL = 'https://jsonplaceholder.typicode.com/users'



function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        
        xhr.responseType = 'json'                                 // распарсить ответ(бедет не строка, а обьект)
        xhr.setRequestHeader('Content-type', 'application/json')  // установить хедеры которые отправляются с запросом// (название хедера, значение)

        
        // xhr.open('POST', requestURL)
        
        xhr.onload = () => {
            if (xhr.status >= 400) {                              // обработка ошибочных статусов
                reject(xhr.response)
            } else {
                resolve(xhr.response);                        // можно чтобы получить обьект записать ((JSON.parse(xhr.response))
            }
        }
        xhr.onerror = () => {                                     // обработать ошибку
            reject(xhr.response)
        }
        
        xhr.send(JSON.stringify(body))                      // нужно отправить не обьект, а строчку (JSON.stringify)
    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


const body = {
    name: 'Vlad',
    age: 26
}


sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))





