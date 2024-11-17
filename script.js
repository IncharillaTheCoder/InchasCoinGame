document.addEventListener("keydown", (event) => {
  const coin = document.getElementById("coin");

  // Check if the pressed key is either 'h' for heads or 't' for tails
  if (event.key.toLowerCase() === "h" || event.key.toLowerCase() === "t") {
    // Start the spinning animation for 5 seconds
    coin.style.animation = `spin 5s ease-in-out`;

    // After 5 seconds, stop the spinning and force it to land on heads or tails
    setTimeout(() => {
      coin.style.animation = "none";  // Remove the spin animation

      // Rotate the coin to show heads or tails
      if (event.key.toLowerCase() === "h") {
        // Force the coin to land on heads
        coin.style.transform = `rotateY(3600deg)`;  // 10 full spins for heads
      } else if (event.key.toLowerCase() === "t") {
        // Force the coin to land on tails
        coin.style.transform = `rotateY(5400deg)`;  // 15 full spins for tails
      }
    }, 5000); // After 5 seconds, apply the final rotation
  }
});

// Function to update the text above the coin when typing in the input box
const textInput = document.getElementById("text-input");
const textAboveCoin = document.getElementById("text-above-coin");

textInput.addEventListener("input", () => {
  // Update the text above the coin as the user types
  textAboveCoin.textContent = textInput.value;
});
