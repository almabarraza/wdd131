const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").textContent = document.lastModified;


const counter = document.querySelector(".counter");


let visits = Number(window.localStorage.getItem("visits-localStorage")) || 0;

if (visits !== 0) {
    counter.textContent = visits;
} else {
    counter.textContent = `This is your first review`;
}

visits++;

localStorage.setItem("visits-localStorage", visits);


