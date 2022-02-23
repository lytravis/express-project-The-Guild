window.addEventListener("load", () => {
  const shelf = document.querySelector(".big-container");
  const games = document.querySelectorAll(".container");
  const message = document.createElement("h2");

  if (games.length === 0) {
    shelf.appendChild(message);
    message.innerHTML = "No games yet... Browse games to add a new one!";
  }
})
