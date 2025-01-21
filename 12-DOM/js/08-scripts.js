console.log("Clase 8 - Traversing the DOM | Recorrer el DOM");

const nav2 = document.querySelector(".navegacion");
console.log(nav2);
console.log(nav2.childNodes); // Devuelve una colección de nodos hijos (incluyendo espacios en blancos o saltos de lineas).
console.log(nav2.children); // Devuelve una colección de código HTML.

console.log(nav2.children[0]); // Devuelve el primer elemento hijo.
console.log(nav2.children[0].nodeName); // Devuelve el nombre del nodo.
console.log(nav2.children[0].nodeType); // Devuelve el tipo de nodo.

const card4 = document.querySelector(".card");
console.log(card4.children[1].children);
console.log(card4.children[1].children[1].textContent); // Devuelve el texto del segundo hijo del segundo hijo de card.
card4.children[0].src = "img/hacer1.jpg";

console.log(card4.children[0]); // Modifica el atributo src de la imagen del primer hijo de card.

// Navegar del hijo al padre
console.log(card4.parentNode); // Devuelve el padre del elemento card.
console.log(card4.parentElement); // Devuelve el padre valido HTML del elemento card.

// Navegar al elemento o nodo hermano
console.log(card4.nextElementSibling); // Devuelve el siguiente hermano del elemento card.
const card5 = document.querySelector(".card:nth-child(4)");
console.log(card5.previousElementSibling); // Devuelve el previo hermano del elemento card.

// Seleccionar el primer elemento hijo de la navbar
console.log(nav2.firstElementChild); // Devuelve el primer hijo de la navbar.
console.log(nav2.lastElementChild); // Devuelve el último hijo de la navbar.
