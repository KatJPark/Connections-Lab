let currentNum = 0

let theButton = document.getElementById("the-button");
console.log(theButton);

theButton.addEventListener("click", function(){

    let theNumber = document.getElementById("the-number");
    console.log(theNumber);

    currentNum = currentNum + 1;
    theNumber.innerHTML = currentNum;

});

