/* 
Diferencias y ejemplos con la variable de tipo const y let:
- Aplican todas las mismas reglas pero se diferencian en 2 puntos. 
- Una variable declarada con const no se puede reasignar por otro valor
- Se debe declarar con un valor si o si.

 */

// Creando una variable y reasignando el valor:
/*  
const nombreRepartidor = 'Carlos';
console.log(nombreRepartidor);  
nombreRepartidor = 'Juan'; Esto devuelve un error
console.log(nombreRepartidor);
*/

// Inicializando una variable sin ningún valor:
/* const marcaMoto; Esto marca un error
marcaMoto = 'Honda';
*/

// Forma correcta:
const nombreRepartidor = 'Leonardo';
console.log(nombreRepartidor);
