document.addEventListener("DOMContentLoaded", () => {
  console.log("Documento listo ✅");
});

// Prueba de qué código se ejecuta primero
console.log(1);

document.addEventListener("DOMContentLoaded", () => {
  console.log(2);
});

console.log(3);
