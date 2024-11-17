document.addEventListener("keydown", function(event) {
    var coin = document.getElementById("coin");
    var result = document.getElementById("result");

    coin.style.transition = "transform 3s";
    coin.style.transform = "rotateY(360deg)";

    setTimeout(function() {
        if (event.key === "h" || event.key === "H") {
            coin.style.transform = "rotateY(0deg)";
            result.innerHTML = "Heads";
        } else if (event.key === "t" || event.key === "T") {
            coin.style.transform = "rotateY(180deg)";
            result.innerHTML = "Tails";
        }
        coin.style.transition = "";
    }, 3000);
});
