console.log("Eventos que ocurren con el mouse");

const nav5 = document.querySelector(".navegacion");

nav5.addEventListener("click", () => {
  console.log("Click en la navegación");
});

nav5.addEventListener("mouseenter", () => {
  console.log("Entrando en la navegación");
});

nav5.addEventListener("mouseout", () => {
  console.log("Saliendo en la navegación");
});

nav5.addEventListener("mousedown", () => {
  console.log("Apretando hacia abajo el botón del mouse en la navegación");
});

nav5.addEventListener("mouseup", () => {
  console.log("Soltando hacia arriba el botón del mouse en la navegación");
});

nav5.addEventListener("dblclick", () => {
  console.log("Haciendo doble click en la navegación");
});
