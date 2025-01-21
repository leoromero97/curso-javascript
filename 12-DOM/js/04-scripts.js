console.log("Clase 4 - Elementos por querySelector");
// Utiliza . y el nombre de la clase, como cuando escribis estilos en css.
// querySelector selecciona el primer elemento que encuentre en el DOM.
// Seleccionar un elemento que no existe, retorna un null.
// Podemos tener selectores específicos como en css.
// Permite seleccionar elementos por clases y id.
// Podemos seleccionar elementos HTML.

const card1 = document.querySelector(".card");
console.log(card1);

const info1 = document.querySelector(".premium .info");
console.log(info1);

const sectionHost1 = document.querySelector(
  "section.hospedaje .card:nth-child(2)"
);
console.log(sectionHost1);

const form2 = document.querySelector("#formulario");
console.log(form2);

const nav1 = document.querySelector("nav");
console.log(nav1);
