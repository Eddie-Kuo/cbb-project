// import functions here 
import { saveProfile } from '../fetch-utils.js';

const profileForm = document.querySelector('.form-container');

// set the State 
let username = '';
let bio = '';

// form submitting event
profileForm.addEventListener('submit', async (event) => {

    event.preventDefault();
    const data = new FormData(profileForm);
    
    username = data.get('username-input');
    bio = data.get('bio-input');

    const profile = {
        user_name: username,
        bio: bio,
    };

    await saveProfile(profile);
    profileForm.reset();
    location.href = '../index.html';
});
