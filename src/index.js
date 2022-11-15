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
        card.classList.add("card","bg-white", "text-grey-400", "p-3", "rounded-lg", "flex-col", "text-center", "w-48", "gap-5", "flex", "items-center", "h-80");
        let image = document.createElement("img");
        image.classList.add("inline", "border-2", "border-slate-300", "rounded-full", "w-20", "h-20", "m-1");
        let name = document.createElement("h3");
        name.classList.add("name","text-3xl", "text-center", "overflow-hidden");
        let description = document.createElement("p");
        description.classList.add("overflow-hidden");
        let characterCard = document.createElement("a");
        characterCard.classList.add("border-2", "rounded-lg");
        let id = document.createElement("p");
        id.classList.add("id");
        id.innerText = data[i].id;
        image.setAttribute("src", "data:image/gif;base64," + data[i].image);
        name.innerText = data[i].name;
        description.innerText = data[i].shortDescription;
        characterCard.innerText = "Character page";
        characterCard.setAttribute("href", "./character.html?" +  data[i].id);
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(characterCard);
        card.appendChild(id);
        id.style.display = "none";
        container.appendChild(card);
        console.log(data[i].name);
        /// Search bar
        document.getElementById("searchBar").addEventListener("keyup", () => {
            let filter = document.getElementById("searchBar").value;     // get the value input in the search bar
            let txtValue = data[i].name;         
            filter = filter.toUpperCase();
            txtValue = txtValue.toUpperCase();    // not case sensitive
    
            if (txtValue.indexOf(filter) > -1) {  
                card.style.display = "";
            } else {
              card.style.display = "none";
            }
        })
        
        
    }
    
    
}
)






