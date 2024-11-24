document.addEventListener("keydown", function(event) {
    var coin = document.getElementById("coin");
    var result = document.getElementById("result");
    var titleInput = document.getElementById("titleInput");
    var title = document.getElementById("title");

    if (event.key === "e" || event.key === "E") {
        titleInput.style.display = "block";
        titleInput.focus();
    }

    if (event.key === "h" || event.key === "H" || event.key === "t" || event.key === "T") {
        coin.style.transition = "transform 4s cubic-bezier(0.25, 1, 0.5, 1)";
        coin.style.transform = "rotateY(1440deg)"; // Rotate for 4 seconds

        result.innerHTML = ""; // Clear result until coin stops spinning

        setTimeout(function() {
            coin.style.transition = "none"; // Stop spinning
            if (event.key === "h" || event.key === "H") {
                coin.style.transform = "rotateY(0deg)";
                result.innerHTML = "Heads";
            } else if (event.key === "t" || event.key === "T") {
                coin.style.transform = "rotateY(180deg)";
                result.innerHTML = "Tails";
            }
        }, 4000);
    }

    if (event.key === "r" || event.key === "R") {
        coin.style.transition = "transform 4s cubic-bezier(0.25, 1, 0.5, 1)";
        coin.style.transform = "rotateY(1440deg)"; // Rotate for 4 seconds

        result.innerHTML = ""; // Clear result until coin stops spinning

        setTimeout(function() {
            coin.style.transition = "none"; // Stop spinning
            // Perform a real 50/50 coin flip
            if (Math.random() < 0.5) {
                coin.style.transform = "rotateY(0deg)";
                result.innerHTML = "Heads";
            } else {
                coin.style.transform = "rotateY(180deg)";
                result.innerHTML = "Tails";
            }
        }, 4000);
    }
});

document.getElementById("titleInput").addEventListener("change", function() {
    var title = document.getElementById("title");
    title.textContent = this.value;
    this.style.display = "none";
});
