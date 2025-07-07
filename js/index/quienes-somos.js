// ============================================
// SELECCIÓN DE ELEMENTOS DE LA SECCIÓN "QUIÉNES SOMOS"
// ============================================
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn"); // Botones de pestañas
const articles = document.querySelectorAll(".content"); // Contenido asociado a cada pestaña

// ============================================
// CAMBIAR CONTENIDO SEGÚN EL BOTÓN SELECCIONADO
// ============================================
about.addEventListener("click", function (e) {
    const id = e.target.dataset.id; // Obtiene el valor del atributo data-id del botón presionado

    if (id) {
        // Paso 1: Remover clase "active" de todos los botones
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Paso 2: Añadir clase "active" al botón que fue presionado
        e.target.classList.add("active");

        // Paso 3: Ocultar todos los artículos (contenidos)
        articles.forEach(function (article) {
            article.classList.remove("active");
        });

        // Paso 4: Mostrar el artículo correspondiente al botón presionado
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

/* 
NOTA:
- e.target hace referencia al botón que fue presionado.
- El botón debe tener un atributo data-id que coincida con el id de uno de los <article>.
- Al presionar el botón con data-id="historia", se mostrará el <article id="historia">.
*/
