// https://api.sampleapis.com/coffee/hot
// objects are curly brackets, arrays are square brackets
// document.querySelector allows us select html elements and store them into variables to manipulate them via J
   
// set up
const title = document.querySelector(".coffeeName")
const description = document.querySelector(".coffeeDescription")
const next = document.querySelector(".next")
const previous = document.querySelector(".previous")
const image = document.querySelector(".coffeePicture")
const count = document.querySelector(".coffeeNumber")

fetch("https://api.sampleapis.com/coffee/hot")
    .then((response) => {
        return response.json()
    })
    .then((results) => {
        let counter = 0
        
        // intial values
        title.innerHTML = results[counter].title
        description.innerHTML = results[counter].description

        next.addEventListener("click", function(){
            if(counter <results.length) {
            counter++
            updateHTML(results, counter)
            updateImages(counter)
            }
        })
        previous.addEventListener("click", function(){
            if(counter > 0) {
            counter--
            updateHTML(results, counter)
            updateImages(counter)
            }
        }) 
    })

    function updateHTML(results, index) {
        title.innerHTML = results[index].title
        description.innerHTML = results[index].description
    }

    function updateImages(counter) {
        image.src = `./assets/coffee${counter}.jpg`
        count.innerHTML = counter
    }




