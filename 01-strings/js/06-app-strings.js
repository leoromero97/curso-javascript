// repeat permite repetir una cadena de texto

const product6 = "Celular Xiaomi ";
const text = "en promoción ".repeat(3);
console.log(`${product6} ${text}!!!`);
// Si pasas un número que no es entero, se redondea al número entero, no tiene en cuenta si el decimal es mayor o menor a 5.
const text2 = "en promoción ".repeat(2.7);
console.log(`${product6} ${text2}!!`);

// El método split() devuelve un array con cada caracter del valor del string.
const activity = "Estoy aprendiendo JavaScript moderno";
console.log(activity.split(""));

// Devuelve un array con cada palabra del valor del string que este separado por un espacio.
console.log(activity.split(" "));

// Devuelve un array con cada palabra del valor del string que este separado por una coma y un espacio.
const hobbies = "Leer, caminar, escuchar música, escribir, programar";
console.log(hobbies.split(", "));

// Devuelve un array con cada palabra del valor del string que este separado por un #.
const hashtag = "Aprendiendo JavaScript #JSModerno";
console.log(hashtag.split("#"));
