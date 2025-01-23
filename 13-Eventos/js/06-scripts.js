console.log("Bubbling con stopPropagation()");

const card6 = document.querySelector(".card");
const card6Info = document.querySelector(".info");
const card6Title = document.querySelector(".titulo");
console.log(card6);

card6.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Click en card");
});

card6Info.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Click en info de la card");
});

card6Title.addEventListener("click", (e) => {
  // Sin stopPropagation() se ejecutan los 3 eventos al presionar el title
  e.stopPropagation();
  console.log("Click en title de la card");
});
