const username3='jack2424-cryto';

const apiUrl3= `https://api.github.com/users/${username3}`;

const avatarElement3= document.querySelector("#user3 .user-avatar");
const usernameElement3= document.querySelector("#user3 .user-username");
const edadElement3=document.querySelector('#user3 .user-edad');
const repoCountElement3 = document.querySelector("#user3 .user-repoCount");

fetch(apiUrl3)
    .then(response => response.json())
    .then(data =>{
        avatarElement3.src =data.avatar_url;
        usernameElement3.textContent = data.login;
        edadElement3.textContent= "20";
        repoCountElement3.textContent = data.public_repos;
    })

    .catch(error =>{
        console.error('Error fetching data from Github API', error);

    });