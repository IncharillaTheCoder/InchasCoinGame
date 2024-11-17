document.addEventListener("keydown", function(event) {
    var coin = document.getElementById("coin");
    var result = document.getElementById("result");

    if (event.key === "h" || event.key === "H") {
        coin.style.transform = "rotateY(0deg)";
        result.innerHTML = "Heads";
    } else if (event.key === "t" || event.key === "T") {
        coin.style.transform = "rotateY(180deg)";
        result.innerHTML = "Tails";
    }
});
