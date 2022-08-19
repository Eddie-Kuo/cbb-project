// import functions here
import { getProfiles, signOutUser, checkAuth } from '../fetch-utils.js';


//DOM Elements
const userList = document.querySelector('.list');

// let user_name = '';
// let bio = '';
// let created_at = '';

function renderUserInfo(profile) {
    const li = document.createElement('li');
    const nameDiv = document.createElement('div');
    const bioDiv = document.createElement('div');
    const infoDiv = document.createElement('div');

    nameDiv.textContent = profile.user_name;
    bioDiv.textContent = profile.bio;
    infoDiv.textContent = profile.created_at;

    li.classList.add('user-list');
    li.append(nameDiv, bioDiv, infoDiv);
    return li;
}

async function displayProfiles() {
    userList.textContent = '';

    const profiles = await getProfiles();
    for (let profile of profiles) {
        const div = renderUserInfo(profile);
        userList.append(div);
    }
}
displayProfiles();

//sign out link
const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);
// make sure we have a user
checkAuth();