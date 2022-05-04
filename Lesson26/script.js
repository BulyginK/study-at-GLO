const getData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.log(error);
            alert('Error in getData')
        })
}

const sendData = (user) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        
}


getData('db.json')
    .then(user => sendData(user))
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log(error);
        alert('Error in setData')
    })