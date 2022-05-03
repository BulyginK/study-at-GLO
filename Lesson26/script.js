const getData = () => {
    let user = fetch('db.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
}

// const sendData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(user),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
// }


getData()


console.log(userData);
// sendData()