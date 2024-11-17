document.addEventListener("keydown", (event) => {
  const coin = document.getElementById("coin");

  if (event.key.toLowerCase() === "h" || event.key.toLowerCase() === "t") {
    coin.style.animation = `spin 5s ease-in-out`;

    setTimeout(() => {
      coin.style.animation = "none";
      coin.style.transform = `rotateY(3600deg)`;
    }, 5000);
  }
});
