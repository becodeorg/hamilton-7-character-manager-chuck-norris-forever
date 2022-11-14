import axios from 'axios';

//Populate with existing character

document.getElementById("displayImg");
encode();

///Get id from URL
const link = new URL(window.location);
const search = link.search;
const id = search.slice(1);

console.log(id);

// Populate according to id

axios.get("https://character-database.becode.xyz/characters/"+ id)
.then((response) => response.data)
.then((data) => {
    let image = document.createElement("img");
    let name = document.getElementById("name");
    let description = document.getElementById("intro");
    let longDescription = document.getElementById("description");
    document.getElementById("displayImg").appendChild(image);
    image.setAttribute("src", "data:image/gif;base64," + data.image);
    document.getElementById("txt").value = document.getElementById("displayImg").innerHTML;
    name.value = data.name;
    description.value = data.shortDescription;
    longDescription.value = data.description;


})

////Get form input and post


async function handleSubmit(event) {
    event.preventDefault();
  
    // const data = new FormData(event.target);


    // let url = document.querySelector("img").getAttribute("src");

    let url = document.getElementById("txt").value.slice(33);
  
    const valueName = document.getElementById('name').value;

    const valueIntro = document.getElementById('intro').value;

    const valueDescription = document.getElementById('description').value;
  
    console.log(valueName, valueIntro, valueDescription, url);

    const res = await axios({
      method: 'put',
      url: `https://character-database.becode.xyz/characters/${id}`,
      data: {
        image: url,
        name: `${valueName}`,
        description: `${valueIntro}`,
        shortDescription: `${valueDescription}`,
      }
      
      });

      console.log(res);

    // axios.put("https://character-database.becode.xyz/characters/"+ id, {
    //     image: url,
    //     name: valueName,
    //     description: valueDescription,
    //     shortDescription: valueIntro,
        
    //     })
    // .then((res) => console.log(res))
       


    window.location.assign("./index.html");
  }


  
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);


////////Load new image

function encode() {
    document.getElementById("displayImg").removeAttribute("src");
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