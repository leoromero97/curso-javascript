/* 
  Diferencias y ejemplos con la variable de tipo let:
  - Si se declara una variable con el mismo nombre en diferentes archivos del proyecto, van a ocurrir errores de ejecución.
  - No se podría utilizar la variable direccion en este archivo, se podría comentar el archivo 01-class.js o usar otros nombres para los ejemlos.
  - Aplican los mismas características
  - La diferencia es que, let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando, a diferencia de la palabra reservada var la cual define una variable global o local en una función sin importar el ámbito del bloque.
*/

// Ejemplos con let:

let nombreCliente = 'Popus';
console.log(nombreCliente);
nombreCliente = 'TBBD';
console.log(nombreCliente);
nombreCliente = 1;
console.log(nombreCliente);
nombreCliente = null;
console.log(nombreCliente);

