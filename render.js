export function renderBaby(baby) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = baby.image;
    img.alt = baby.title;

    const h2 = document.createElement('h2');
    h2.textContent = baby.title;

    const p = document.createElement('p');
    p.textContent = baby.astrology;

    li.append(h2, img, p);

    return li;
}

export function renderAstroSign(astrology) {
    const option = document.createElement('option');
    option.value = astrology.name;
    option.textContent = astrology.name;
    return option;
}
