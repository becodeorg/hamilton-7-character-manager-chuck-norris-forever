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
    card.classList.add("bg-white", "text-grey-400", "p-3", "rounded-lg", "flex-col", "text-center", "w-3/4", "gap-5", "flex", "items-center", "h-5/6");
    let image = document.createElement("img");
    image.classList.add("inline", "border-2", "border-slate-300", "rounded-full", "w-20", "h-20", "m-1");
    let name = document.createElement("h3");
    name.classList.add("text-3xl", "text-center");
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

    
