const months2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.table(months2);
// Conocer longitud del array
console.log(months2.length);
// Recorrer array con con un iterador for
for (let index = 0; index < months2.length; index++) {
  console.log(index);
  const element = months2[index];
  // const element = months2[0];
  // const element = months2[1];
  // const element = months2[2];...
  console.log(element);
}
