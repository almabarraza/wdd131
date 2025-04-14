/* This shows the last modified date in the footer*/
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").textContent = document.lastModified;

/*This section create an event fot the hamburger menu in mobile view*/
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


/*This array is for creating cards in the sun plants and shade plants pages with the funtion createPlantCard*/
const plants = [
    {
        plantName: "Lavender",
        type: "Sun",
        water: "Once per week",
        soil: "Well-drained soil",
        light: "6 hours",
        image: "images/lavender.webp"

    },

    {
        plantName: "Carnation",
        type: "Sun",
        water: "Three times per week",
        soil: "Well-drained soil",
        light: "6 hours",
        image: "images/carnation.webp"

    },

    {
        plantName: "Sunflower",
        type: "Sun",
        water: "Every two days",
        soil: "Well-drained soil",
        light: "6 hours",
        image: "images/sunflower.webp"

    },

    {
        plantName: "Gerbera",
        type: "Sun",
        water: "Twice per week",
        soil: "Well-drained soil",
        light: "6 hours",
        image: "images/gerbera.webp"

    },

    {
        plantName: "Rosemary",
        type: "Sun",
        water: "Every two days",
        soil: "Well-drained soil",
        light: "8 hours",
        image: "images/rosemary.webp"

    },

    {
        plantName: "Rose bush",
        type: "Sun",
        water: "Every day",
        soil: "Well-drained soil",
        light: "4 hours",
        image: "images/rosebush.webp"

    },


    {
        plantName: "Fern",
        type: "Shade",
        water: "Every day",
        soil: "Moist, well-drained soil",
        light: "indirect light",
        image: "images/fern.webp"

    },

    {
        plantName: "Calathea",
        type: "Shade",
        water: "Every day",
        soil: "Moist, well-drained soil",
        light: "indirect light",
        image: "images/calathea.webp"

    },

    {
        plantName: "Begonia",
        type: "Shade",
        water: "Once or twice per week",
        soil: "Moist soil",
        light: "indirect light",
        image: "images/begonia.webp"

    },

    {
        plantName: "Cast Iron Plant",
        type: "Shade",
        water: "Once per week",
        soil: "Moist, well-drained soil",
        light: "indirect light",
        image: "images/cast-iron-plant.webp"

    },

    {
        plantName: "Impatients",
        type: "Shade",
        water: "Once per week in winter",
        soil: "Well-drained soil",
        light: "indirect light",
        image: "images/impatients.webp"

    },

    {
        plantName: "Mother-in-law's Tonge",
        type: "Shade",
        water: "When the soil is completely dry",
        soil: "Well-drained soil",
        light: "indirect light",
        image: "images/mother-in-law.webp"

    },

];


document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    if (path.includes("sun-plants.html")) {
        const sunPlants = plants.filter(plant => plant.type === "Sun");
        createPlantCard(sunPlants);
    }
    else if (path.includes("shade-plants.html")) {
        const shadePlants = plants.filter(plant => plant.type === "Shade");
        createPlantCard(shadePlants);
    }

    if (path.includes("contact-us")) {

       /* const select = document.querySelector("reasonName");*/
        createOptions(reasons);
    }

    if (path.includes("thanks.html")) {
        const counter = document.querySelector(".counter");
        showCounter(counter);
        
    }

});



/*Funtion for creating the plant cards*/
function createPlantCard(filteredPlants) {

    filteredPlants.forEach(plant => {

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let type = document.createElement("p");
        let water = document.createElement("p");
        let soil = document.createElement("p");
        let light = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = plant.plantName;
        type.innerHTML = `<span class="labelimg">Type:</span> ${plant.type}`;
        water.innerHTML = `<span class="labelimg">Water:</span>${plant.water}`;
        soil.innerHTML = `<span class="labelimg">Soil:</span>${plant.soil}`;
        light.innerHTML = `<span class="labelimg">Light:</span>${plant.light}`;
        img.setAttribute("src", plant.image);
        img.setAttribute("alt", `${plant.plantName}`);
        img.setAttribute("loading", "lazy");
        img.classList.add("image-zoom");


        card.appendChild(name);
        card.appendChild(type);
        card.appendChild(water);
        card.appendChild(soil);
        card.appendChild(light);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);

    })


}

/* For the Contact Us section*/
/*This array fill the select option dynamically*/

const reasons = [
    {
        id: "01",
        name: "Plant care question"
    },

    {
        id: "02",
        name: "Events"
    },

    {
        id: "03",
        name: "Collaborations or partnerships"

    },

    {
        id: "04",
        name: "Feedback or suggestions"

    },

    {
        id: "05",
        name: "Other"

    }
];

/* This funtion creates the option elemet in the DOM**/
function createOptions(reasons) {
    const select = document.getElementById("reasonName");
    reasons.forEach(reason => {
        const option = document.createElement("option");
        option.value = reason.id;
        option.textContent = reason.name;
        select.appendChild(option);

    });
}

/*Thanks page. This section create a counter to know the number of visits of the user*/
function showCounter(counter) {
    
    let visits = Number(window.localStorage.getItem("visits-localStorage")) || 0;

    if (visits !== 0) {
        counter.textContent = visits;
    } else {
        counter.textContent = `This is your first visit 😊`;
    }

    visits++;

    localStorage.setItem("visits-localStorage", visits);
}
