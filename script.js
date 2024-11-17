document.addEventListener("keydown", function(event) {
    var coin = document.getElementById("coin");
    var result = document.getElementById("result");

    coin.style.transition = "transform 4s linear";
    coin.style.transform = "rotateY(1440deg)"; // 1440deg to rotate continuously for 4 seconds

    setTimeout(function() {
        if (event.key === "h" || event.key === "H") {
            coin.style.transform = "rotateY(0deg)";
            result.innerHTML = "Heads";
        } else if (event.key === "t" || event.key === "T") {
            coin.style.transform = "rotateY(180deg)";
            result.innerHTML = "Tails";
        }
        coin.style.transition = "";
    }, 4000);
});
