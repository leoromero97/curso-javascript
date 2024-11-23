// Destructuring de un array, extraer el valor y crear una variable a partir de ese valor
const numbers3 = [1, 2, 3, 4];
console.log(numbers3);
const [index0] = numbers3;
// El nombre puede ser cualquiera ya que se accede en orden del index
console.log(index0);

// Si queres una posición diferente sin utilizar las otras posiciones, podes usar comas.
const [, , index2] = numbers3;
console.log(index2);
// Si queres obtener el resto de elementos podes usar ...
const [, index1, ...rest] = numbers3;
console.log("índice 1 y resto del array", index1, rest);
