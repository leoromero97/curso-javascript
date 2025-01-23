console.log("Eventos con un teclado.");

const search1 = document.querySelector(".busqueda");

search1.addEventListener("keydown", () => {
  console.log("Bajando una tecla");
});

search1.addEventListener("keyup", () => {
  console.log("Soltando una tecla");
});

search1.addEventListener("blur", () => {
  console.log("Primero entrar al input y luego salir");
});

search1.addEventListener("copy", () => {
  console.log("Copiando contenido");
});

search1.addEventListener("paste", () => {
  console.log("Pegando contenido");
});

search1.addEventListener("cut", () => {
  console.log("Cortando contenido");
});

search1.addEventListener("input", () => {
  console.log("Ejecuta todos los eventos del input menos el blur");
});

search1.addEventListener("input", (event) => {
  console.log("Ver el objeto evento:", event);
  console.log("El tipo del elemento:", event.type);
  console.log("La etiqueta completa:", event.target);
  console.log("Lo que el usuario esta escribiendo:", event.target.value);
});


