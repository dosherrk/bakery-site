// ===== Мобильное меню (бургер) =====
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

// Открытие/закрытие меню по клику на бургер
burger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  burger.classList.toggle("is-active", isOpen);
  burger.setAttribute("aria-expanded", isOpen);
});

// Закрываем меню после клика по любой ссылке
nav.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger.classList.remove("is-active");
    burger.setAttribute("aria-expanded", "false");
  });
});

// ===== Год в подвале обновляется автоматически =====
document.getElementById("year").textContent = new Date().getFullYear();
