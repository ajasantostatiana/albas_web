document.getElementById("year").textContent = new Date().getFullYear();
const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
btn?.addEventListener("click", () => menu.classList.toggle("is-open"));
