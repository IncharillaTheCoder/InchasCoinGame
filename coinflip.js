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
        coin.style.transition = "transform 4s ease-out";
        var finalRotation = (event.key === "h" || event.key === "H") ? 1440 : 1620;
        coin.style.transform = "rotateY(" + finalRotation + "deg)"; // Rotate for 4 seconds

        result.innerHTML = ""; // Clear result until coin stops spinning

        setTimeout(function() {
            coin.style.transition = "none"; // Stop spinning
            if (event.key === "h" || event.key === "H") {
                result.innerHTML = "Heads";
            } else if (event.key === "t" || event.key === "T") {
                result.innerHTML = "Tails";
            }
        }, 4000);
    }

    if (event.key === "r" || event.key === "R") {
        coin.style.transition = "transform 4s ease-out";
        var randomRotation = Math.random() < 0.5 ? 1440 : 1620; // Random 50/50 chance for Heads or Tails
        coin.style.transform = "rotateY(" + randomRotation + "deg)"; // Rotate for 4 seconds

        result.innerHTML = ""; // Clear result until coin stops spinning

        setTimeout(function() {
            coin.style.transition = "none"; // Stop spinning
            if (randomRotation === 1440) {
                result.innerHTML = "Heads";
            } else {
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
