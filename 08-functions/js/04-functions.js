function iniciarSuma1(a, b) {
  console.log("El resultado de la suma de la función es: ", a + b);
}
iniciarSuma1(3, 2);
iniciarSuma1(333, 1001);

// Se le puede asignar un valor por defecto
function saludarPorConsola1(nombre = "persona humana 👽", apellido = "") {
  console.log(`Hola ${nombre.concat(" ", apellido)} 👋`);
}

saludarPorConsola1("Leonardo", "Romero");

saludarPorConsola1("Nicolas"); // Muestra undefined en el segundo valor si no tuviera el valor por defecto

saludarPorConsola1(); // Muestra undefined en los lugares donde se muestran los valores si no tuviera valores por defecto
