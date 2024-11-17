document.addEventListener("keydown", function(event) {
    var coin = document.getElementById("coin");
    var result = document.getElementById("result");

    coin.style.transition = "transform 4s linear";
    coin.style.transform = "rotateY(1440deg)"; // 1440deg to rotate continuously for 4 seconds

    result.innerHTML = ""; // Clear result until coin stops spinning

    setTimeout(function() {
        if (event.key === "h" || event.key === "H") {
            coin.style.transition = "none"; // Stop spinning
            coin.style.transform = "rotateY(0deg)";
            result.innerHTML = "Heads";
        } else if (event.key === "t" || event.key === "T") {
            coin.style.transition = "none"; // Stop spinning
            coin.style.transform = "rotateY(180deg)";
            result.innerHTML = "Tails";
        }
    }, 4000);
});
