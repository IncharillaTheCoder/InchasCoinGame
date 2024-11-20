var names = [];

document.addEventListener("keydown", function(event) {
    var titleInput = document.getElementById("titleInput");
    var title = document.getElementById("title");

    if (event.key === "e" || event.key === "E") {
        titleInput.style.display = "block";
        titleInput.focus();
    }
});

document.getElementById("titleInput").addEventListener("change", function() {
    var title = document.getElementById("title");
    title.textContent = this.value;
    this.style.display = "none";
});

document.getElementById("addNamesButton").addEventListener("click", function() {
    var namesInput = document.getElementById("namesInput");
    names = namesInput.value.split("\n").filter(name => name.trim() !== "");
    renderWheel();
});

document.getElementById("spinButton").addEventListener("click", function() {
    var wheel = document.getElementById("wheel");
    var result = document.getElementById("result");

    wheel.style.transition = "transform 4s linear";
    wheel.style.transform = "rotate(1440deg)"; // Rotate for 4 seconds

    result.innerHTML = ""; // Clear result until wheel stops spinning

    setTimeout(function() {
        var randomIndex = Math.floor(Math.random() * names.length);
        result.innerHTML = "Result: " + names[randomIndex];
        wheel.style.transition = "none"; // Stop spinning
    }, 4000);
});

function renderWheel() {
    var wheel = document.getElementById("wheel");
    wheel.innerHTML = "";
    var numSegments = names.length;
    var angle = 360 / numSegments;

    names.forEach((name, index) => {
        var segment = document.createElement("div");
        segment.classList.add("segment");
        segment.style.transform = `rotate(${index * angle}deg) skewY(-60deg)`;
        segment.innerHTML = name;
        wheel.appendChild(segment);
    });
}
