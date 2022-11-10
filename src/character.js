/////Populate single page
let container = document.querySelector(".container");

///Get id from URL
const link = new URL(window.location);
const search = link.search;
const id = search.slice(1);

console.log(id);

// Populate according to id

axios.get("https://character-database.becode.xyz/characters/"+ id)
.then((response) => response.data)
.then((data) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let description = document.createElement("p");
    let longDescription = document.createElement("p");
    image.setAttribute("src", "data:image/gif;base64," + data.image);
    name.innerText = data.name;
    description.innerText = data.shortDescription;
    longDescription.innerText = data.description;
    document.getElementById("editBtn").setAttribute("href", "./edit.html?" + data.id);
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(longDescription);
    container.appendChild(card);



})

//Delete

async function deleteCharacter() {
    await axios.delete("https://character-database.becode.xyz/characters/"+ id);
    window.location.replace("./index.html");

}

document.getElementById("delete").addEventListener("click", () => {
    let deletion = confirm("Are you sure you want to delete this character?");
    console.log(deletion);
    if (deletion === true) {
        
       deleteCharacter()
    }
    })

    
