var newYearDiv = document.getElementsByClassName("new-year")[0];
var confetti = document.getElementById("confetti");

newYearDiv.addEventListener("animationend", function() {
    shootConfetti();
});

function shootConfetti() {
    let confettiPosition = 0.4 ;
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: confettiPosition },
    }, document.body);
}