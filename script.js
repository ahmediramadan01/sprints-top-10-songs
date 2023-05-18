function toggleList() {
  var button = document.getElementById("toggleButton");
  var songsList = document.getElementById("songs-list");
  if (songsList.style.display === "none") {
    songsList.style.display = "block";
    button.innerHTML = "Hide me!";
  } else {
    songsList.style.display = "none";
    button.innerHTML = "Show me!";
  }
}
