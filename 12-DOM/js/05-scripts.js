console.log("Clase 5 - Elementos por querySelectorAll");
// Utiliza selectores css
// querySelectorAll selecciona todos los elementos que cumplan con el selector, elemento, clase, id, etc.

const card2 = document.querySelectorAll(".card");
console.log(card2);

// Seleccionar un elemento por id que no existe un array vacio
const doesNotExist3 = document.querySelectorAll('does-not-exist');
console.log(doesNotExist3);