var counter = 0;
var wins = 0;
var loses = 0;









$(".crystal-image-1").on("click", function() {
    counter += 10;

    alert("Your new score is " + counter);
});

$(".crystal-image-2").on("click", function() {
    counter += 8;
    alert("Your new score is " + counter);
});

$(".crystal-image-3").on("click", function() {
    counter += 2;
    alert("Your new score is " + counter);
});

$(".crystal-image-4").on("click", function() {
    counter += 6;
    alert("Your new score is " + counter);
});

