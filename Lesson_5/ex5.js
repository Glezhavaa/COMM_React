const btn = document.querySelector('#fetch');
const forImg = document.querySelector('#img');
const forEmail = document.querySelector('#email');
const forCity = document.querySelector('#city');
const forName = document.querySelector('#name');
const apiUrl = 'https://randomuser.me/api';

function getData() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(function saveData(data) {
        let person = data.results[0];
        const {picture: {medium}, email, location: {city}, name: {title, first, last}} = person;

        forImg.setAttribute("src", medium);
        forEmail.textContent = email;
        forCity.textContent = city;
        forName.textContent = `${title} ${first} ${last}`;
    });
}
btn.addEventListener('click', getData);