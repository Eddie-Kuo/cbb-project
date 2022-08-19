const SUPABASE_URL = 'https://wiqzbpedlnmcfdxbyqay.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpcXpicGVkbG5tY2ZkeGJ5cWF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2MDcxMDQsImV4cCI6MTk3NjE4MzEwNH0.Fr6hrIqsda4aanZRvmxv9-nHHlYyVuZ1SWOx0IU2Vzg';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Helper for logging errors */

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}

/* Categories */

export async function getCategories() {
    const response = await client.from('categories').select('*');
    return checkError(response);
}

/* Posts */

export async function getPosts() {
    const response = await client.from('posts').select(`
        *,
        category:categories(*)
    `);
    return checkError(response);
}

export async function createPost(post) {
    return await client.from('posts').insert(post);
}

// add or update profile on supabase
export async function saveProfile(profile) {
    return await client.from('profiles').upsert(profile).single();
}

// get profile/ profiles function
export async function getProfiles() {
    const response = await client.from('profiles').select('*');
    return response.data;
}

export async function getProfile(id) {
    const response = await client.from('profiles').select('*').match({ id }).single();
    return response.data;
}
