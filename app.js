/* Imports */
import { getBabies, getAstroSign } from './fetch-utils.js';
import { renderAstroSign, renderBaby } from './render.js';

/* Get DOM Elements */
const babyList = document.getElementById('baby-list');
const astrologySelect = document.getElementById('astrology-select');
const searchForm = document.getElementById('search-form');
const notificationDisplay = document.getElementById('notification-display');
/* State */

let astrologys = [];
let babies = [];
let error = null;
let count = 0;

/* Events */
window.addEventListener('load', async () => {
    findBabies();

    const response = await getAstroSign();
    error = response.error;
    astrologys = response.data;
    if (!error) {
        displayAstroSign();
    }
});

async function findBabies(name, astrology) {
    const response = await getBabies(name, astrology);
    error = response.error;
    babies = response.data;
    count = response.count;

    displayNotifications();
    if (!error) {
        displayBabies();
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    findBabies(formData.get('name'), formData.get('astroSign'));
});

/* Display Functions */
function displayBabies() {
    babyList.innerHTML = '';

    for (const baby of babies) {
        const babyEl = renderBaby(baby);
        babyList.append(babyEl);
    }
}

function displayAstroSign() {
    for (const astrology of astrologys) {
        const option = renderAstroSign(astrology);
        astrologySelect.append(option);
    }
}
function displayNotifications() {
    if (error) {
        notificationDisplay.classList.add('error');
        notificationDisplay.textContent = error.message;
    } else {
        notificationDisplay.classList.remove('error');
        notificationDisplay.textContent = `Showing ${babies.length} of ${count}`;
    }
}

// (don't forget to call any display functions you want to run on page load!)
