/* Imports */
import { getBabies, getAstroSign } from './fetch-utils.js';
import { renderAstroSign, renderBaby } from './render.js';

/* Get DOM Elements */
const babyList = document.getElementById('baby-list');
const astrologySelect = document.getElementById('astrology-select');

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
    const response = await getBabies();
    error = response.error;
    babies = response.data;
    if (!error) {
        displayBabies();
    }
}

/* Display Functions */
function displayBabies() {
    babyList.innerHTML = '';

    for (const baby of babies) {
        const babyEl = renderBaby(baby);
        babyList.append(babyEl);
        console.log(baby);
    }
}

function displayAstroSign() {
    for (const astrology of astrologys) {
        const option = renderAstroSign(astrology);
        astrologySelect.append(option);
    }
}
// (don't forget to call any display functions you want to run on page load!)
