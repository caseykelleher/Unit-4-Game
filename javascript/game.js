var counter = 0;
var wins = 0;
var loses = 0;
var targetNumber = 120;

//document.getElementById("number-to-meet").innerHTML = targetNumber;
//Math.floor(Math.random() * 120) + 19;
$("#number-to-meet").text(targetNumber);


$(".crystal-image-1").on("click", function() {
    counter += 10;

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
    counter += 8;
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
    counter += 2;
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
    counter += 6;
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