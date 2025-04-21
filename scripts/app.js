document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("check");
  const navMenu = document.querySelector(".nav-menu");

  checkbox.addEventListener("change", () => {
    navMenu.classList.toggle("active", checkbox.checked);
  });
});
