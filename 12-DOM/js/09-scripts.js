console.log("Clase 9 - Eliminar elementos del DOM");
// Se puede eliminar por si mismo

// Eliminar 2do enlance
const firstItemNav1 = document.querySelector("a");
firstItemNav1.remove();
console.log(firstItemNav1);

// Eliminar desde el padre
const nav3 = document.querySelector(".navegacion");
console.log(nav3.children);

nav3.removeChild(nav3.children[1]);
