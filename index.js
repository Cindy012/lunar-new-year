var newYearDiv = document.getElementsByClassName("new-year")[0];
var confetti = document.getElementById("confetti");

newYearDiv.addEventListener("animationend", function() {
    console.log("The animation has ended!");
});