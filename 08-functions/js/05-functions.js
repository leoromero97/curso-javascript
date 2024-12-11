function initApp1() {
  console.log("Iniciando App");
  loadApp1();
}
initApp1();

function loadApp1() {
  console.log("Cargando información desde la app de carga");
  authUser1("Leo");
}

function authUser1(name) {
  console.log("Autenticando persona usuaria, espere...");

  console.log("Auth exitoso, Te damos la bienvenida, ", name, "👋");
}
// Funciones que retornan
function functionSumaReturn(a, b) {
  return a + b;
}
const result1 = functionSumaReturn(2, 2);
console.log(result1);

let totalCart1 = 0;

function addProduct(precio) {
  return (totalCart1 += precio);
}

function calcImport1(totalCart) {
  return totalCart * 1.2;
}

totalCart1 = addProduct(200);
totalCart1 = addProduct(400);
totalCart1 = addProduct(600);

const totalCartFintal = calcImport1(totalCart1);

console.log("El total a pagar es: ", totalCartFintal)
