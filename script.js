const username1 = 'alejandro-cespedes';

const apiUrl1 = `https://api.github.com/users/${username1}`; 

const avatarElement1 = document.querySelector('#user1 .user-avatar');
const usernameElement1 = document.querySelector('#user1 .user-username');
const edadElement1 = document.querySelector('#user1 .user-edad');
const repoCountElement1 = document.querySelector('#user1 .user-repoCount');

fetch(apiUrl1)
    .then(response => response.json())
    .then(data => {
        avatarElement1.src = data.avatar_url;
        usernameElement1.textContent = data.login;
        edadElement1.textContent = '22'; 
        repoCountElement1.textContent = data.public_repos;
    })
    .catch(error => {
        console.error('Error fetching data from GitHub API', error);
    });

