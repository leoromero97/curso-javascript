console.log("Clase 6 - Modificar textos o imagenes con JavaScript");
// Acceder al textos de 3 formas diferentes.
const heading1 = document.querySelector(".contenido-hero h1");
console.log(heading1);

// Acceder por innerText, NO trae el contenido aunque la etiqueta no este visible por css
console.log("Inner Text:", heading1.innerText);

// Acceder por textContent, trae el contenido aunque la etiqueta no este visible por css
console.log("Inner Text:", heading1.textContent);

// Acceder por innerHtml, trae el HTML
console.log("Inner Html:", heading1.innerHTML);

// Modificar el texto
heading1.textContent = "Nuevo Heading para la clase 6";

// Modificar una imagen
const image1 = document.querySelector(".card img");
image1.src =
  "https://images.unsplash.com/photo-1599423424751-54e0c1187a02?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
console.log(image1.src);
