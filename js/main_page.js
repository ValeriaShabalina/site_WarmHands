const navButton = document.querySelector(".nav-button");
const navItems = document.querySelector(".nav-items");
const navOverlay = document.querySelector(".nav-overlay");
const closeMenuBtn = document.querySelector(".close-menu-btn");

// Функция для блокировки/разблокировки скролла
// function toggleBodyScroll(lock) {
//     if (lock) {
//         // Блокируем скролл страницы
//         document.body.style.overflow = 'hidden';
//         // Для iOS устройств
//         document.body.style.position = 'fixed';
//         document.body.style.width = '100%';
//     } else {
//         // Разблокируем скролл страницы
//         document.body.style.overflow = '';
//         document.body.style.position = '';
//         document.body.style.width = '';
//     }
// }

// Открытие меню по клику на бургер
navButton.addEventListener("click", function () {
    navItems.classList.toggle("show");
    navOverlay.classList.toggle("active");
    navButton.classList.toggle("change");
    toggleBodyScroll(false); // Блокируем скролл
});

// Закрытие меню по клику на крестик
closeMenuBtn.addEventListener("click", function () {
    navItems.classList.remove("show");
    navOverlay.classList.remove("active");
    navButton.classList.remove("change");
    toggleBodyScroll(false); // Разблокируем скролл
});

// Закрытие меню при клике на затемненную область
navOverlay.addEventListener("click", function () {
    navItems.classList.remove("show");
    navOverlay.classList.remove("active");
    navButton.classList.remove("change");
    toggleBodyScroll(false); // Разблокируем скролл
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navItems.classList.remove("show");
        navOverlay.classList.remove("active");
        navButton.classList.remove("change");
        toggleBodyScroll(false); // Разблокируем скролл
    });
});

// Закрытие меню при нажатии Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navItems.classList.remove("show");
        navOverlay.classList.remove("active");
        navButton.classList.remove("change");
        toggleBodyScroll(false); // Разблокируем скролл
    }
});
