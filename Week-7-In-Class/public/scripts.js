window.addEventListener('load', function(){
//Grab the data from the database using fetch()
fetch('/data')
.then(response => response.json())
.then(data => {
    console.log(data);
});

    //Setup event listener on button
let quoteButton = document.getElementById("quote-button");
quoteButton.addEventListener('click', function () {
    console.log("A Quote!!!");
let name = document.getElementById("chirp-name").value;
console.log(name);

        //grab quote
        let quote = document.getElementById('chirp-content').value;
        console.log(quote);

        let quoteObj = {
            "quote": quote,
            "name": name
        };
        console.log(quoteObj);

        //make the object JSON
        let quoteJSON = JSON.stringify(quoteObj);
        console.log(quoteJSON);

        fetch("/quoteSave", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: quoteJSON              
        })
        .then(response => response.json())
        .then(data => {
            console.log("Did this work???");
            console.log(data);
        });
}); 
});