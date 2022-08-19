// import functions here 
import { checkAuth, saveProfile } from '../fetch-utils.js';
import { getProfile, signOutUser } from '../fetch-utils.js';

const profileForm = document.querySelector('.form-container');
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


// pre populate form if user data already exists
const user = checkAuth();

async function displayProfile() {
    const profile = await getProfile(user.id);
    if (profile) {
        inputEl.value = profile.user_name;
        bioEl.value = profile.bio;
    }
}

displayProfile();

//sign out link
const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);
// make sure we have a user
checkAuth();
