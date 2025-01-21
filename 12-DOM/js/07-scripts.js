console.log("Clase 7 - Modificar css con JavaScript");
// Podemos modificar el css según una interación en el DOM.

const heading2 = (document.querySelector(
  ".contenido-hero h1"
).style.backgroundColor = "red");
console.log(heading2);

const heading3 = (document.querySelector(".contenido-hero h1").style.fontSize =
  "60px");
console.log(heading3);

// Lo ideal es agregar o sacar clases con JavaScript.
const card3 = document.querySelector(".card");
card3.classList.add("nueva-clase", "segunda-nueva-clase");
card3.classList.remove("card");
console.log(card3);
