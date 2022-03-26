
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

/* ye nahi malum tha*/  var started = false;

var level = 0;

$(document).keypress(function(){
//    ye nahi malum tha
if(!started){
        $("#level-title").text("level " + level);
        
    }
    nextSequence();
    started = true;
    });


    $(".btn").click(function () {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});



function nextSequence() {

    level++;

    $("#level-title").text("level " + level);


    var randomChosenColour = buttonColours[randomNumber];
    var randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

};


function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

};

// nextSequence();

function animatePress(currentColour) {
        $("#" + currentColour).addClass("pressed");
        
        setTimeout(function () {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
};
