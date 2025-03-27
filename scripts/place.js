const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").textContent = document.lastModified;

const temperture = Number(document.querySelector('#temperture').value);
const wind = Number(document.querySelector('#wind').value);


const calculateWindChill = function (temperture, wind) {
    return 13.12 + (0.6215 * temperture) - (11.37 * (wind ** 0.16)) + (0.3965 * temperture * (wind ** 0.16));
}

if (temperture <= 10 && wind > 4.8) {

    document.querySelector('#wind-chill').value = calculateWindChill(temperture, wind).toFixed(2) + "°C";
} else {
    document.querySelector('#wind-chill').value = "N/A";
}


