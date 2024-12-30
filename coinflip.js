document.addEventListener("keydown", function(event) {
    var coin = document.getElementById("coin");
    var result = document.getElementById("result");
    var titleInput = document.getElementById("titleInput");
    var title = document.getElementById("title");

    if (event.key === "e" || event.key === "E") {
        titleInput.style.display = "block";
        titleInput.focus();
    }

    if (["h", "H", "t", "T", "r", "R"].includes(event.key)) {
        // Reset the speed and transformation before starting a new spin
        coin.style.transition = "none";
        coin.style.transform = "rotateY(0deg)";

        setTimeout(function() { // Allow the previous reset to take effect
            coin.style.transition = "transform 4s ease-out";

            let finalRotation;
            if (event.key === "h" || event.key === "H") {
                finalRotation = 1440;
            } else if (event.key === "t" || event.key === "T") {
                finalRotation = 1620;
            } else if (event.key === "r" || event.key === "R") {
                finalRotation = Math.random() < 0.5 ? 1440 : 1620; // Random 50/50 chance for Heads or Tails
            }

            coin.style.transform = "rotateY(" + finalRotation + "deg)"; // Rotate for 4 seconds

            result.innerHTML = ""; // Clear result until coin stops spinning

            setTimeout(function() {
                coin.style.transition = "none"; // Disable transition to reset
                if (finalRotation === 1440) {
                    result.innerHTML = "Heads";
                } else {
                    result.innerHTML = "Tails";
                }
                // Add the fade-in animation to the result
                result.style.opacity = 0;
                setTimeout(function() {
                    result.style.opacity = 1;
                }, 10);
            }, 4000);
        }, 50);
    }
});

document.getElementById("titleInput").addEventListener("change", function() {
    var title = document.getElementById("title");
    title.textContent = this.value;
    this.style.display = "none";
});
