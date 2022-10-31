let express = require("express");
let app = express();

let signs = {
    "data" : [
        {
            name: "aries",
            info: "ding dong"
        },
        {
            name: "gemini",
            info: "horrifying"
        },
        {
            name: "pisces",
            info: "the best"
        }
    ]
}

// app.get("/", (request, response)=> {
//     response.send("Hello");
// })

app.use("/", express.static("public"));

app.get("/about", (request,response)=> {
    response.send("this is an about page");
})

app.get("/signs", (request, response)=> {
    response.json(signs);
})

app.get("/signs/:sign", (request, response)=> {
    console.log(request.params.sign);
    let user_sign = request.params.sign;
    let user_obj;
    for (let i=0; i<signs.data.length;i++) {
        if(user_sign == signs.data[i].name) {
            user_obj = signs.data[i];
        }
    }
    console.log(user_obj);
    if(user_obj) {
        response.json(user_obj);
    } else {
        response.json({status: "failed"});
    }
})

app.listen(1000,()=> {
    console.log("app is listening at localhost:1000")
})