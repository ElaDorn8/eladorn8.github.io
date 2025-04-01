var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
let level = 0;
var userChosenColor;

$(document).keypress(function (){
    if (level===0){
        nextSequence();
    }
});

function nextSequence(randomChosenColor){   
     //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
     userClickedPattern=[];
    level++;    
    $("h1").html("Level " + level);     
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    playSound(randomChosenColor); 

    gamePattern.push(randomChosenColor);
    $("#"+ randomChosenColor).fadeOut(100).fadeIn(100);

    
}

$(".btn").click(function(){
    userChosenColor = (this.id);
    userClickedPattern.push(userChosenColor);
   
    playSound(userChosenColor);
    animatePress(userChosenColor);
    //Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length-1);
});



function checkAnswer(currentLevel){
    //see if the most recent answer is the same as the same as the game pattern
if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    //If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if(userClickedPattern.length=== gamePattern.length){
        //Call nextSequence() after a 1000  millisecond delay.
        setTimeout(function(){
            nextSequence()
        }, 2000);
    }
}else{
    Wrong();
}
}
function Wrong(){
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over")
    }, 200);
    $("h1").html("Game Over, Press Any Key to Restart");
    startOver();
}
function startOver(){
    level = 0;
    gamePattern = [];
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColor).removeClass("pressed");
    }, 100);
}
