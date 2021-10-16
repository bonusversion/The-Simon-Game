var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// $(document).keypress(function() {
//     if (!started) {
//         nextSequence();
//         started = true;
//     }
// });

$("h1").click(function() {
    if (!started) {
        nextSequence();
        started = true;
    }
});

$(document).keydown(function(event) {
    switch (event.key) {
        case "q":
            var activeButton = $("." + event.key);
            var userChosenColour = activeButton.attr("id");
            userClickedPattern.push(userChosenColour);

            playSound(userChosenColour);
            animatePress(userChosenColour);

            checkAnswer(userClickedPattern.length - 1);
            break;
        case "w":
            var activeButton = $("." + event.key);
            var userChosenColour = activeButton.attr("id");
            userClickedPattern.push(userChosenColour);

            playSound(userChosenColour);
            animatePress(userChosenColour);

            checkAnswer(userClickedPattern.length - 1);
            break;
        case "a":
            var activeButton = $("." + event.key);
            var userChosenColour = activeButton.attr("id");
            userClickedPattern.push(userChosenColour);

            playSound(userChosenColour);
            animatePress(userChosenColour);

            checkAnswer(userClickedPattern.length - 1);
            break;
        case "s":
            var activeButton = $("." + event.key);
            var userChosenColour = activeButton.attr("id");
            userClickedPattern.push(userChosenColour);

            playSound(userChosenColour);
            animatePress(userChosenColour);

            checkAnswer(userClickedPattern.length - 1);
            break;
    }
});


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Here to Restart");

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    level++;
    $("h1").text("Level " + level);
}

function playSound(name) {
    audioPath = "sounds/" + name + ".mp3";
    audio = new Audio(audioPath);
    audio.play();
}

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");

    setTimeout(function() {
        $("." + currentColour).removeClass("pressed");
    }, 100)
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = 0;
}