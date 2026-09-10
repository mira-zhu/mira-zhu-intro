const dogAPIKey = "live_AhsLLhCvs5njCptuBzOxKjsaDJ5Re88jHGsfF9Nx7QIenflJszeo6fPFmSJLFzQd";
const body = document.querySelector("body");

// API endpoint 1: doggo image

const doggoImage = document.createElement("img");
body.appendChild(doggoImage);
// todo: add styling class for image 

async function fetchImage(breed_id) {
    const url = `https://api.thedogapi.com/v1/images/search?limit=1&breed_id=${breed_id}&order=RANDOM`;
    try {
        const response = await fetch(url, {
        headers: {
            'x-api-key': dogAPIKey,
            }
        });
        const responseJson = await response.json();
        doggoImage.setAttribute("src", responseJson[0].url);
    } catch (error) {
        console.log(error);
    }
    return
}

fetchImage(121);

let toggleButton = document.createElement("button");
body.appendChild(toggleButton);
toggleButton.textContent = "Show Me a Samoyed Instead";
toggleButton.setAttribute("type", "button");

toggleButton.addEventListener("click", function(e) {
    if (toggleButton.textContent.includes("Samoyed")) {
        fetchImage(214); // fetch samoyed image
        toggleButton.textContent = "Show Me a Retriever Instead";
    } else { 
        fetchImage(121); // fetch retriever image
        toggleButton.textContent = "Show Me a Samoyed Instead";
    }
});
