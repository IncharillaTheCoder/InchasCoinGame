document.addEventListener("keydown", function(event) {
    var coin = document.getElementById("coin");
    var result = document.getElementById("result");
    var titleInput = document.getElementById("titleInput");
    var title = document.getElementById("title");

    if (event.key === "e" || event.key === "E") {
        titleInput.style.display = "block";
        titleInput.focus();
    }

    coin.style.transition = "transform 4s linear";
    coin.style.transform = "rotateY(1440deg)"; // Rotate for 4 seconds

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

document.getElementById("titleInput").addEventListener("change", function() {
    var title = document.getElementById("title");
    title.textContent = this.value;
    this.style.display = "none";
});
