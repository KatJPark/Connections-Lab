console.log("Index file is running!");

//loading the express library using "require"
let express = require("express");

//initializing an object using the express library
let app = express();

let foodData = {
    foods : [
        {name: "cake",
        tastiness: 10
    },
        {name: "pizza",
        tastiness: 9
    },
        {name: "zucchini",
        tastiness: 2
    },
    ]
}

// our first route
app.get("/", (request, response)=>{
    console.log("Request was made to "/"");
    response.send("Welcome!");
})

// our second route
app.get("/about", (request, response)=>{
    console.log("Request was made to "/"");
    response.send("I made this application in Oct 2022!");
})

//data serving route
app.get("/data", (request, response)=>{
    console.log("A request was made for data");
    response.json(); 
})



app.listen(3000, () =>{
    console.log("The application is running on port 3000. Go to localhost 3000 to see it.");
});