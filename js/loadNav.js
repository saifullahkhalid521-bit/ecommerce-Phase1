document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      const navToggle = document.getElementById("navToggle");
      const navUl = document.getElementById("navUl");

      if (navToggle && navUl) {
        navToggle.addEventListener("click", () => {
          navUl.classList.toggle("active");
        })
      }
    })
    .catch(error => console.error("Error loading navigation:", error));

    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});