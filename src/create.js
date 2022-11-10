////Get form input and post


async function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);


    let url = document.getElementById("txt").value.slice(33);
  
    const valueName = data.get('name');

    const valueIntro = data.get('intro');

    const valueDescription = data.get('description');
  
    console.log(valueName, valueIntro, valueDescription, url);

    await axios.post("https://character-database.becode.xyz/characters", {
        name: valueName,
        shortDescription: valueIntro,
        description: valueDescription,
        image: url,
        
     })
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
            document.getElementById("txt").value = document.getElementById("displayImg").innerHTML;
            
            
          }
         
          fileReader.readAsDataURL(imageFile);
          
          
        }
        
      }

      document.getElementById("portrait").addEventListener ("change", encode)