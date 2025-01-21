console.log("Clase 10 - Crear elementos en el DOM");
// Sirve para hacer pruebas de CRO.

// Crear un nuevo enlace

const itemNav2 = document.createElement("a");
itemNav2.textContent = "Nuevo Enlace";
itemNav2.href = "/nuevo-enlace";
itemNav2.target = "_blank";

console.log(itemNav2);

// Definir donde mostrar el elemento e insertarlo
const nav4 = document.querySelector(".navegacion");
nav4.appendChild(itemNav2); // Lo inserta al final

const itemNav3 = document.createElement("a");
itemNav3.textContent = "Nuevo Enlace 2";
itemNav3.href = "/nuevo-enlace-2";

nav4.insertBefore(itemNav3, nav4.children[1]); // Lo inserta en la posición 1, insertBefore tiene más control y requiere dos parámetros.

// Crear una nueva card de forma dinámica.

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Música electrónica 2025";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

// Crear div con la clase de info
const infoCard1 = document.createElement("div");
infoCard1.classList.add("info");
// El orden es importante para ir agregando elementos
infoCard1.appendChild(parrafo1);
infoCard1.appendChild(parrafo2);
infoCard1.appendChild(parrafo3);

// Crear imagen
const imageCard1 = document.createElement("img");
imageCard1.src = "img/hacer1.jpg";

// Crear el card
const domCustomCard1 = document.createElement("div");
domCustomCard1.classList.add("card");

// Asignar la imagen al card
domCustomCard1.appendChild(imageCard1);
domCustomCard1.appendChild(infoCard1);

// Insertar en el DOM donde están las otras cards
const containerCards1 = document.querySelector(".hacer .contenedor-cards");
containerCards1.appendChild(domCustomCard1);
console.log(containerCards1);
