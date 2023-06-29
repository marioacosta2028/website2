var x = "mario";
x = 13;
console.log(x);

var firstname = "mario"
var lastname = "acosta"
var numberOfSiblings = 1;
var hasPets = true;


console.log(firstname);
console.log(lastname);
console.log(numberOfSiblings);
console.log(hasPets)

if(hasPets === true){
   console.log("i love my dog lala")


}



var number = 0;
while (number < 15){
     console.log("");
     number++;
}


var button = document.getElementById("hi");
var h1 = document.getElementById("blood");
var body = document.body;
var clickCount = 0;

body.setAttribute("style", "background-color:blue");


button.addEventListener("click", function(){
    clickCount++; 
    console.log("click");


    body.setAttribute("style", "background-color: white");

    if (clickCount === 2){
        body.setAttribute("style", "background-color:blue");
    }

    if (clickCount === 3){
        body.setAttribute("style", "background-color:red");

    }

    if (clickCount === 4){
        body.setAttribute("style", "background-color:black");

    }

});=