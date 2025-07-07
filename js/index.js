// ==============================
// FUNCIONALIDADES PRINCIPALES PARA LA PÁGINA DE INICIO
// ==============================

// Establecer el año actual en el footer
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


// ==============================
// TOGGLE DE MENÚ DE NAVEGACIÓN
// ==============================

// Abrir o cerrar el menú en pantallas pequeñas
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});


// ==============================
// COMPORTAMIENTO DEL NAVBAR AL HACER SCROLL
// ==============================

// Fijar el navbar y mostrar botón "volver arriba"
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    // Añadir clase para fijar el navbar
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    // Mostrar botón de "volver arriba"
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});


// ==============================
// SCROLL SUAVE ENTRE SECCIONES
// ==============================

// Desplazamiento suave al hacer clic en los enlaces del menú
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height + 15;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");

        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }

        // Realizar el scroll animado
        window.scrollTo({
            left: 0,
            top: position,
        });

        // Cerrar el menú después de hacer clic en un enlace
        linksContainer.style.height = 0;
    });
});
