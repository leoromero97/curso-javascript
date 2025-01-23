console.log("Evento scroll");
// Normalmente para animaciones
// Suceden en la ventana global del DOM

window.addEventListener("scroll", () => {
  console.log("Scrolling...");
  const scrollPxY = window.scrollY;

  console.log(scrollPxY);

  // Ejemplo con elementos de la web.
  const premiumSection = document.querySelector(".premium");
  // Conocer la ubicación del elemento en el DOM.
  const location = premiumSection.getBoundingClientRect();
  console.log(location);
  // Agregar condición en base a la ubicación.
  if (location.top < 100) {
    console.log("La sección premium ya está visible");
  } else {
    console.log("La sección premium no está visible, scrollear más");
  }
});
