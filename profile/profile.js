// import functions here 
import { checkAuth, saveProfile } from '../fetch-utils.js';
import { getProfile } from '../fetch-utils.js';

const profileForm = document.querySelector('.form-container');
const homeButton = document.querySelector('.home-button');
const inputEl = document.querySelector('.username-input');
const bioEl = document.querySelector('.bio-input');

// set the State 
let username = '';
let bio = '';

// form submitting event, push info to Supabase 
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

homeButton.addEventListener('click', () => {
    location.href = '../index.html';
});

// async function to display profile
// within the function use get profile function from fetch utils 
// if statement (response) = if response is true then assign the values to the appropriate spots

const user = checkAuth();

async function displayProfile() {
    const profile = await getProfile(user.id);
    if (profile) {
        inputEl.value = profile.user_name;
        bioEl.value = profile.bio;
    }
}

displayProfile();
