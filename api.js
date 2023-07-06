// function loadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => getUserName(data));
// }

// function getUserName(users){
//     const userName = document.getElementById('user-name');
//     for (const user of users){
//         const li = document.createElement('li');
//         li.innerText = `Name: ${user.name}`;
//         userName.appendChild(li);
//     }
// }


function getImages(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => sliceData(data));
}

function sliceData(data){
    const myData = data.slice(1, 20);
    const userImages = document.getElementById('user-images');
    for (const user of myData){
        const div = document.createElement('div');
        div.innerHTML = `<h4>${user.title}</h4>
        <img src = ${user.url}>`
        userImages.appendChild(div);
    }
}
