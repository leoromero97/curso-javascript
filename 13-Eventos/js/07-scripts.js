console.log("Bubbling con delegation");

const card7 = document.querySelectorAll(".card");

card7[1].addEventListener("click", (e) => {
  console.log(e.target);
  // Primero se debe conocer la referencia del elemento
  if (e.target.classList.contains("titulo")) {
    console.log("Hiciste click en el título");
  }

  if (e.target.classList.contains("precio")) {
    console.log("Hiciste click en el precio");
  }

  if (e.target.classList.contains("card")) {
    console.log("Hiciste click en el card");
  }
});
