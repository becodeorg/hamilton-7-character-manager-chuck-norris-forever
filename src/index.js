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





////Get form input


function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);

    const valueImage = data.get("portrait");
  
    const valueName = data.get('name');

    const valueIntro = data.get('intro');

    const valueDescription = data.get('description');
  
    console.log(valueName, valueIntro, valueDescription, valueImage);

    // axios.post("https://character-database.becode.xyz/characters", {
    //     name: valueName,
    //     shortDescription: valueIntro,
    //     description: valueDescription,
        
    // })
    // .then((res) => console.log(res))
    //    


    // window.location.assign("./index.html");
  }


  
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);


//   /// display img when choosing



    function encode() {
        var selectedfile = document.getElementById("portrait").files;
        if (selectedfile.length > 0) {
          var imageFile = selectedfile[0];
          var fileReader = new FileReader();
          fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result;
            var newImage = document.createElement('img');
            newImage.src = srcData;
            document.getElementById("displayImg").innerHTML = newImage.outerHTML;
            let url = document.getElementById("txt").value = document.getElementById("displayImg").innerHTML;
            console.log(url);
          }
          fileReader.readAsDataURL(imageFile);
          
        }
      }


      document.getElementById("portrait").addEventListener ("change", encode)