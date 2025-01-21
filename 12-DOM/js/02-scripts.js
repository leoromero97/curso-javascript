console.log('Clase 2 - Elementos por className');

const header1 = document.getElementsByClassName('header'); // Devuelve una colección de elementos con la clase 'header'. 
console.log(header1);
// Es importante tener en cuenta las minúsculas y mayúsculas de las clases.
// Si no existe la clase, devolverá una colección vacía.

const hero1 = document.getElementsByClassName('hero'); // Devuelve una colección de elementos con la clase 'hero'.
console.log(hero1);

const contenedores1 = document.getElementsByClassName('contenedor'); // Devuelve una colección de elementos con la clase 'contenedor'.
console.log(contenedores1);

const doesNotExist = document.getElementsByClassName('does-not-exist'); // Devuelve una colección vacía si no existe la clase.
console.log(doesNotExist);