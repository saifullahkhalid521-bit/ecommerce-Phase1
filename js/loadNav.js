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
          navToggle.classList.toggle("open");
        })
      }

      
      const currentPage = window.location.pathname.split("/").pop();

      const navLinks = document.querySelectorAll("#navUl a");

      navLinks.forEach((link) => {
        const linkHref =link.getAttribute("href");
        if(linkHref === currentPage){
          link.classList.add("active");
        }
      })
    })
    .catch(error => console.error("Error loading navigation:", error));

    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});