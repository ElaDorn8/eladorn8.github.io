var randomNumber1 = Math.floor(Math.random()*5)+1;
var randomNumber2 = Math.floor(Math.random()*5)+1;
var heading = document.querySelector("h1");


var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomDiceImage = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage);
heading.innerHTML = "Refresh";
if(randomNumber1>randomNumber2){
heading.innerHTML = "Player 1 wins!";

}else if(randomNumber2>randomNumber1){
    heading.innerHTML = "Player2 wins!";
    
}else{
    heading.innerHTML = "It's a draw!";
 
}

