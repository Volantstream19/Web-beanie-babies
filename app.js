/* Imports */
import { getBabies, renderBaby } from './fetch-utils.js';

/* Get DOM Elements */
const babyList = document.getElementById('baby-list');

/* State */

let astrology = [];
let babies = [];
let error = null;
let count = 0;

/* Events */
window.addEventListener('load', async () => {
    findBabies();
    console.log(babies);
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
    }
}
// (don't forget to call any display functions you want to run on page load!)
