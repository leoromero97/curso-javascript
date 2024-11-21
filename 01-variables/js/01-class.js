/* 
Fundamentos de Variables y ejemplos con la variable de tipo var:

- Es una característica de los lenguajes de programación, en ellas se pueden guardar valores e información.
- Su esqueleto es [tipo de variable] [nombre de la variable] = [valor de la variable];
- Existen 3 (tres) formas de declarar una variable, con las palabras reservadas de JavaScript: var, let y const
- Actualmente solo se utilzan const y let.
- Se asigna el valor con el símbolo igual: =
- Se puede reasignar el valor inicial.
- Se puede inicializar sin un valor. 
- Si el valor es un string, se pueden utilizar comillas simples, dobles o inversas, es importante que se abran y cierren con el mismo tipo de comillas.
*/

// Ejemplos:

// Inicializar una variable con un valor
var direccion = "Juncal 2323, CABA";
console.log(direccion);

// Reasignar el valor de la variable
direccion = 'Castañon 2324, CABA';
console.log(direccion);

// Al ser un lenguaje de programación dinámico, no hace falta especificar el tipo de dato.
direccion = 2325;
console.log(direccion);

// Inicializar variable sin valor inicial:
var entregado;
entregado = true;
console.log(entregado);

// Cambiar valor:
entregado = false;
console.log(entregado);

// Inicializar más de una variable con el mismo tipo:
var conductor = 'Juan', direccion = 'Mariano Acosta 1234', precio = 1000;
console.log(conductor, direccion, precio);

// Las variables no se pueden inicializar con números, esto no mostraria nada en la consola, así que comentamos el ejemplo:
// var 1Direccion;
// Las variables si pueden tener número en su nombre:
var direccion1;

// Formas y estilos de nombrar una variable con mas de una palabra:
// Camel case (Recomendada y más utilizada):
var direccionSalida;

// Snacke case o underscord:
var direccion_salida; 

// Pascal case (Normalmente utilizado en clases):
var DireccionSalida;
