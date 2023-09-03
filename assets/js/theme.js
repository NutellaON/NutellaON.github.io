document.addEventListener("DOMContentLoaded", function() {

    const toggle = document.querySelector(".navbar__toggle-btn");
    const navmenu = document.querySelector(".mobile-nav");
  
    console.log(toggle);
    console.log(navmenu);
  
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      navmenu.classList.toggle("active");
    });
  });
  