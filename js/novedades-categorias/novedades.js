// ==================================================
// DATOS DE PRODUCTOS ARTESANALES
// ==================================================
const products = [
  { id: 'rec43w3ipXvP28vog', title: 'Porcelana', company: 'Artesanías del Valle', image: 'https://images.ecestaticos.com/IsuYwVKM40VpRfitRRBCHoJ93Qo=/0x0:1200x900/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F7b4%2F3c1%2F777%2F7b43c1777131c1667121d55833b747aa.jpg', price: 49.99 },
  { id: 'rec4f2RIftFCb7aHh', title: 'Cuadro Artístico', company: 'Arte y Madera', image: 'https://www.liderdelemprendimiento.com/wp-content/uploads/2021/11/Productos-artesanales.jpg', price: 149.99 },
  { id: 'rec8kkCmSiMkbkiko', title: 'Pulsera de Mimbre', company: 'Hecho a Mano', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy01tFJITTt8tqJIOlzvwvRupJ3xEF6P_tzg&s', price: 35.99 },
  { id: 'recBohCqQsot4Q4II', title: 'Mesa Rústica', company: 'Maderas Nobles', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXWCVn8BznVHvZx3cQhiGCpLFGcXIEGXcop8F9xbP1diXYAHCuiPoKcsEzPZhO2U9ZlM&usqp=CAU', price: 89.99 },
  { id: 'recDG1JRZnbpRHpoy', title: 'Mesa de Comedor', company: 'Artesanías del Valle', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy70ryCz-Plzr4ocduXAE54TbpjLJ_FtE_Ega_95KLtTDm1_LTugjXqZB13o_3tkNfhWg&usqp=CAU', price: 55.99 },
  { id: 'recNWGyP7kjFhSqw3', title: 'Juego de Sofá Artesanal', company: 'Hecho a Mano', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVSJ9RV3fMngLqIMY0uF7wRkz4Q46uyInqVsmnoRZ7w3UpdSbbKtrQD8B35MiqycnV6o&usqp=CAU', price: 299.99 }
];

// ==================================================
// VARIABLES DEL DOM
// ==================================================
const productsContainer = document.querySelector('.products-container');
const prevBtnP = document.querySelector('.prev-btn-p');
const nextBtnP = document.querySelector('.next-btn-p');

// ==================================================
// CONFIGURACIÓN INICIAL
// ==================================================
let currentIndex = 0;
let productsToShow = getProductsToShow();
let autoSlide;

// ==================================================
// FUNCIÓN: CALCULAR N° DE PRODUCTOS SEGÚN PANTALLA
// ==================================================
function getProductsToShow() {
  const width = window.innerWidth;
  if (width >= 1179) return 3;
  if (width >= 800 && width <= 1178) return 2;
  if (width <= 800) return 1;
}

// ==================================================
// FUNCIÓN: MOSTRAR PRODUCTOS EN EL CARRUSEL
// ==================================================
function renderProducts() {
  productsContainer.innerHTML = products
    .slice(currentIndex, currentIndex + productsToShow)
    .map(product => `
      <article class="product">
        <img src="${product.image}" class="product-img img" alt="${product.title}" />
        <div class="footer-p">
          <h5 class="product-name">${product.title}</h5>
          <span class="product-price">Bs. ${product.price.toFixed(2)}</span>
        </div>
      </article>
    `)
    .join('');
}

// ==================================================
// FUNCIÓN: ACTUALIZAR LA VISUALIZACIÓN
// ==================================================
function updateProductDisplay() {
  productsToShow = getProductsToShow();
  renderProducts();
}

// ==================================================
// FUNCIÓN: INICIAR DESLIZAMIENTO AUTOMÁTICO
// ==================================================
function startAutoSlide() {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + productsToShow) % products.length;
    updateProductDisplay();
  }, 5000); // Cada 5 segundos
}

// ==================================================
// FUNCIÓN: DETENER DESLIZAMIENTO AUTOMÁTICO
// ==================================================
function stopAutoSlide() {
  clearInterval(autoSlide);
}

// ==================================================
// EVENTOS: BOTONES DE NAVEGACIÓN
// ==================================================
prevBtnP.addEventListener('click', () => {
  stopAutoSlide();
  currentIndex = (currentIndex - productsToShow + products.length) % products.length;
  updateProductDisplay();
});

nextBtnP.addEventListener('click', () => {
  stopAutoSlide();
  currentIndex = (currentIndex + productsToShow) % products.length;
  updateProductDisplay();
});

// ==================================================
// EVENTO: AJUSTAR PRODUCTOS AL REDIMENSIONAR PANTALLA
// ==================================================
window.addEventListener('resize', updateProductDisplay);

// ==================================================
// INICIALIZACIÓN
// ==================================================
updateProductDisplay();
startAutoSlide();
