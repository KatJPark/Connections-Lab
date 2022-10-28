// if your name is Billy, stand up when I say Billy, etc. 
// give me items on the page
const moonImage = document.querySelector(".moon")
const description = document.querySelector(".description")
const slider = document.querySelector(".slider")

// go look at this json file as the resource
// this is the "promise"
fetch("data/moons.json")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        // there is a slider, listen for an input
        slider.addEventListener("input", function(){
             console.log(slider.value)
             // depending on the input, do this thing
             // in line 15, we said what moonImage is 
             // .src is where we find that moonImage
             // change the source image (.imageSource) based on the slider value that was input
            moonImage.src = data[slider.value].imageSource
        })
        
    })