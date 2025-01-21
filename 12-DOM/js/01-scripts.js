console.log('Clase 1 - DOM');
let element1 = document;
// Mediante la palabra reservada documento se puede accceder al DOM con JavaScript.
element1 = document.all; // all: Devuelve una colección de todos los elementos del documento pero esta deprecado, en su lugar usar querySelectorAll
element1 = document.querySelectorAll('*')
element1 = document.head; // Devuelve la cabecera como objeto del documento.
element1 = document.body; // Devuelve el cuerpo como objeto del documento.
element1 = document.domain; // Devuelve el dominio del documento pero esta deprecado en su lugar utilizar documentURI.
element1 = document.URL; // Devuelve la URI del documento.
element1 = document.forms; // Devuelve una colección (array) de todos los formularios del documento.
element1 = document.forms[0]; // Devuelve el primer formulario del documento.
element1 = document.forms[0].id; // Devuelve el id del primer formulario del documento.
element1 = document.forms[0].method; // Devuelve el método del primer formulario del documento.
element1 = document.forms[0].action; // Devuelve la acción del primer formulario del documento.
element1 = document.forms[0].classList; // Devuelve las clases del primer formulario del documento en formato de array.
element1 = document.forms[0].className; // Devuelve las clases del primer formulario del documento en formato de string.
element1 = document.links; // Devuelve una colección (array) de todos los enlaces del documento.
element1 = document.links[1]; // Devuelve el segundo enlace del documento.
element1 = document.images; // Devuelve una colección (array) de todas las imágenes del documento.
element1 = document.scripts; // Devuelve una colección (array) de todos los scripts del documento.

console.log(element1)