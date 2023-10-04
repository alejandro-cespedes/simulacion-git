const username2='jcarlos06';
const apiUrl2= `https://api.github.com/users/${username2}`;

const avatarElement2= document.querySelector("#user2 .user-avatar");
const usernameElement2 = document.querySelector("#user2 .user-usurname");
const edadElement2=document.querySelector('#user2 .user-edad');
const repoCountElement2 = document.querySelector("#user2 .user-repoCount");

fetch(apiUrl2)
    .then(response => response.json())
    .then(data =>{
        avatarElement2.src =data.avatar_url;
        usernameElement2.textContent = data.login;
        edadElement2.textContent= "20";
        repoCountElement2.textContent = data.public_repos;
    })
    
    .catch(error =>{
        console.error('Error fetching data from Github API', error);

    });