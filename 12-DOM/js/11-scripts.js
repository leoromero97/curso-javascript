console.log("Clase 11 - Manejar elementos del DOM");
// Seleccionar los elementos del DOM.
const floatingButton = document.querySelector(".btn-flotante");
const footer1 = document.querySelector(".footer");
// Escuchar el evento click en el botón flotante.
floatingButton.addEventListener("click", toggleFooter);
// Crear función para mostrar u ocultar el footer mediante clases de css.
function toggleFooter() {
  if (footer1.classList.contains('activo')) {
    footer1.classList.remove('activo');
    this.classList.remove('activo');
    this.textContent = "Idioma y Moneda";
  } else {
    footer1.classList.add('activo');
    this.classList.add('activo');
    this.textContent = "X Cerrar";
  }
  console.log("Hiciste click en el boton");
}
