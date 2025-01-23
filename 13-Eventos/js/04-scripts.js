console.log("Evento submit");

const form3 = document.querySelector("#formulario");
console.log(form3);
form3.addEventListener("submit", (e) => {
  e.preventDefault();
  // Prevenir el evento por defecto con el método preventDefault()
  console.log(e);
});
