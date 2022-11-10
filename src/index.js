import axios, * as others from 'axios';
const img = document.querySelector("img");
let container = document.querySelector(".container");
// let createBtn = document.querySelector(".createBtn");


//Populate characters page

axios.get("https://character-database.becode.xyz/characters")
.then((response) => response.data)
.then((data) => {
    console.log(data);
    for (let i=0; i<data.length; i++) {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let description = document.createElement("p");
        let characterCard = document.createElement("a");
        image.setAttribute("src", "data:image/gif;base64," + data[i].image);
        name.innerText = data[i].name;
        description.innerText = data[i].shortDescription;
        characterCard.innerText = "Character page";
        characterCard.setAttribute("href", "./character.html?" +  data[i].id);
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(characterCard);
        container.appendChild(card);
    }
   
}
)





