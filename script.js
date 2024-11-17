document.addEventListener("keydown", (event) => {
  const coin = document.getElementById("coin");

  if (event.key.toLowerCase() === "h" || event.key.toLowerCase() === "t") {
    // Trigger the spinning animation
    coin.style.animation = `spin 5s ease-in-out`;

    // After 5 seconds, stop the spinning and show the rigged result
    setTimeout(() => {
      coin.style.animation = "none"; // Remove the animation

      if (event.key.toLowerCase() === "h") {
        // Force the coin to land on heads
        coin.style.transform = `rotateY(3600deg)`; // 3600deg to simulate 10 full spins
      } else if (event.key.toLowerCase() === "t") {
        // Force the coin to land on tails
        coin.style.transform = `rotateY(-3600deg)`; // Negative spin to simulate tails
      }
    }, 5000); // After 5 seconds
  }
});
