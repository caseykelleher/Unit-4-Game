var counter = 0;
var wins = 0;
var loses = 0;
var targetNumber = Math.floor(Math.random() * 121);

//document.getElementById("number-to-meet").innerHTML = targetNumber;
//Math.floor(Math.random() * 120) + 19;
$("#number-to-meet").text(targetNumber);

var img1Value = Math.floor(Math.random() * 13);
var img2Value = Math.floor(Math.random() * 13);
var img3Value = Math.floor(Math.random() * 13);
var img4Value = Math.floor(Math.random() * 13);

$(".crystal-image-1").on("click", function() {
    counter += img1Value;

    alert("Your new score is " + counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $("#many-wins").text(wins);
    }
    
    else if (counter >= targetNumber) {
        alert("You lose!");
        loses++;
        $("#many-loses").text(loses);
    }
});

$(".crystal-image-2").on("click", function() {
    counter += img2Value;
    alert("Your new score is " + counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $("#many-wins").text(wins);
    }
    
    else if (counter >= targetNumber) {
        alert("You lose!");
        loses++;
        $("#many-loses").text(loses);
    }
});

$(".crystal-image-3").on("click", function() {
    counter += img3Value;

    alert("Your new score is " + counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $("#many-wins").text(wins);
    }
    
    else if (counter >= targetNumber) {
        alert("You lose!");
        loses++;
        $("#many-loses").text(loses);
    }
});

$(".crystal-image-4").on("click", function() {
    counter += img4Value;

    alert("Your new score is " + counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $("#many-wins").text(wins);
    }
    
    else if (counter >= targetNumber) {
        alert("You lose!");
        loses++;
        $("#many-loses").text(loses);
    }
});