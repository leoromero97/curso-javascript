console.log('Clase 3 - Elementos por id');
// Debe existir un id por documento HTML.
// Seleccionar el formulario por id.
// Retorna el primer id que encuentra en cascada.
// Retorna un solo elemento.

const form1 = document.getElementById('formulario');
console.log(form1)

// Seleccionar un elemento por id que no existe, retorna un null
const doesNotExist2 = document.getElementById('does-not-exist');
console.log(doesNotExist2);