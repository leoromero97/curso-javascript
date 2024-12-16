// Si queremos detener el if, podemos usar un return siempre y cuando este dentro de una función.
const score06 = 500;

function validateScore06() {
  if (score06 > 300) {
    console.log("Buen puntaje... felicidades");
    return;
  }

  if (score06 > 400) {
    console.log("Excelente puntaje... casi ganas");
    return;
  }
}

validateScore06();
