document.addEventListener("keydown", function(event) {
    var coin = document.getElementById("coin");
    var result = document.getElementById("result");
    var titleInput = document.getElementById("titleInput");
    var title = document.getElementById("title");
    var rotations = 0;
    var interval;

    if (event.key === "e" || event.key === "E") {
        titleInput.style.display = "block";
        titleInput.focus();
    }

    if (event.key === "h" || event.key === "H" || event.key === "t" || event.key === "T" || event.key === "r" || event.key === "R") {
        clearInterval(interval);
        result.innerHTML = ""; // Clear result until coin stops spinning
        coin.style.transition = "none"; // Disable transition during manual rotation
        var start = Date.now();
        var duration = 4000; // Duration of the spin in milliseconds

        interval = setInterval(function() {
            var timePassed = Date.now() - start;
            rotations = Math.floor(timePassed / 50);
            var progress = timePassed / duration;

            // Apply easing (easeOutQuad)
            var easedProgress = progress * (2 - progress);
            var angle = rotations * 30 * easedProgress;

            // Cap the slow down
            if (progress > 0.9) {
                angle += (timePassed % 1000) / 1000 * 30; // Slow down
            }
            
            coin.style.transform = "rotateY(" + angle + "deg)";

            if (timePassed >= duration) {
                clearInterval(interval);
                coin.style.transition = "transform 0.2s linear"; // Enable smooth stop
                var finalRotation;
                if (event.key === "h" || event.key === "H") {
                    finalRotation = 1440;
                    result.innerHTML = "Heads";
                } else if (event.key === "t" || event.key === "T") {
                    finalRotation = 1620;
                    result.innerHTML = "Tails";
                } else if (event.key === "r" || event.key === "R") {
                    if (Math.random() < 0.5) {
                        finalRotation = 1440;
                        result.innerHTML = "Heads";
                    } else {
                        finalRotation = 1620;
                        result.innerHTML = "Tails";
                    }
                }
                coin.style.transform = "rotateY(" + finalRotation + "deg)";
            }
        }, 50);
    }
});

document.getElementById("titleInput").addEventListener("change", function() {
    var title = document.getElementById("title");
    title.textContent = this.value;
    this.style.display = "none";
});
