import { getPostDetail } from '../fetch-utils.js';


console.log( await getPostDetail(1));

const displayBulletinBoard = document.querySelector('.bulletin-board');

// Render post detail function
function renderPostDetail(data) {

    const div = document.createElement('div');
    const h = document.createElement('h2');
    const dateP = document.createElement('p');
    const descriptionP = document.createElement('p');
    const delButton = document.createElement('button');
    const commentsP = document.createElement('p');
    const inputBlock = document.createElement('input');


    dateP.textContent = `last modified ${dateTime}`;
    dateP.classList.add('date-text');
    h.textContent = data.title;
    descriptionP.textContent = data.description;
    delButton.textContent = 'Delete';
    
    div.classList.add('post-detail-container');
    descriptionP.classList.add('post-description');

    div.append(h, dateP, descriptionP, delButton, commentsP, inputBlock);

    return div;
}

//URL Search Params
const params = new URLSearchParams(window.location.search);

async function loadPost() {
    const post = await getPostDetail(params.get('id'));
    const postDisplay = renderPostDetail(post);
    displayBulletinBoard.append(postDisplay);
}

loadPost();

// displaying date
let today = new Date(); 
let date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes();
let dateTime = date + ' ' + time;
