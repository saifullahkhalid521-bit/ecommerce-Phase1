document.addEventListener("DOMContentLoaded", () => {
  fetch("/defalt.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading navigation:", error));
});