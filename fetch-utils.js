const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';

const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBabies(name, astrology) {
    let query = client.from('babies').select('*').order('name').limit(100);

    const response = await query;

    return response;
}

export function renderBaby(baby) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = img.alt = baby.name;

    const h2 = document.createElement('h2');
    h2.textContent = baby.name;

    const p = document.createElement('p');
    p.textContent = baby.astrology;

    li.append(h2, img, p);

    return li;
}
