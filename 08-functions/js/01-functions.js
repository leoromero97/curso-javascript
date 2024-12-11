// Las funciones se declaran y luega se llaman para que se ejecuten, primera forma de crear una función es "Declaración de función"
// suma1(); llamar a una declaración de función antes de que se cree funciona
function suma1() {
  console.log("La función suma1() muestra:", 2 + 2);
}
suma1();
// Expresión de función
// suma2(); llamar a una expresión de función antes de que se cree genera un error
const suma2 = function () {
  console.log(3 + 3);
};
suma2();
