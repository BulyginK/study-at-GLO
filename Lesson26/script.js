const getData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.log(error);
            alert('Error in getData')
        })
}

const check = (user) => {
    return new Promise((resolve, reject) => {
        if (user) resolve(user)
        else reject('Some error')
    })
}

const sendData = (url, data = {}) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}

getData('db.json')
    .then(user => check(user))
    .then(
        user => {
            sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user))   
                .then(data => console.log(data))
                .catch(error => {
                    console.log(error);
                    alert('Error in setData');
                })
        },
        error => { console.log(error) }
    )