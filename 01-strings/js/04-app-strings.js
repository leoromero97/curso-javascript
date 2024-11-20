const product4 = "Botella de agua";
console.log(product4.length);

// Agregar espacios en blanco al principio y al final, JavaScript cuenta esos espacios como un carácter.
const product4WithSpaces = "              Botella de agua         ";
console.log(product4WithSpaces.length);

// Eliminar espacios en blanco del inicio del string
console.log(product4WithSpaces.trimStart());

// Eliminar espacios en blanco al final del string
console.log(product4WithSpaces.trimEnd());

// Eliminar espacios en blanco al inicio y al final del string de forma concatenada
console.log(product4WithSpaces.trimStart().trimEnd());

// Eliminar espacios en blanco al inicio y al final del string con 1 solo método
console.log(product4WithSpaces.trim());
console.log(product4WithSpaces.trim().length);
