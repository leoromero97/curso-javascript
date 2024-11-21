const product5 = "Monitor de 20 pulgadas";
console.log(product5);

// Reemplazar un string por otro con método replace()
console.log(product5.replace("pulgadas", '"'));

console.log(product5.replace("Monitor", "Monitor Curvo"));

// Método slice() para extraer o cortar una parte del string, hay que pasar el index del string donde quieres que inicie y donde quieres que corte
console.log(
  "Arranca en la posición 0, y desde la 10 en adelante lo corta al string: ",
  product5.slice(0, 10)
);
console.log(
  "A partir de la posición 8 en adelante muestra el contenido del string: ",
  product5.slice(8)
);
console.log(
  "Si la posición de inicio es más grande que la del index a cortar, no se ejecuta el método.",
  product5.slice(2, 1)
);

// Alternativa a método slice() con substring()
console.log(
  "Arranca en la posición 0, y desde la 10 en adelante lo corta al string: ",
  product5.substring(0, 10)
);
console.log(
  "Si la posición de inicio es más grande que la del index a cortar, se invierten las posiciones: ",
  product5.substring(2, 1)
);

// Cortar la primera letra de un string
const userName = "Leo";
console.log(userName.substring(0, 1));
console.log(userName.charAt(0));
