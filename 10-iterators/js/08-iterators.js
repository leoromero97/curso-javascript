// for in
console.log("for in");
const car1 = {
  brand: "Ford",
  year: 2020,
  model: "Fiesta",
};

for (let property in car1) {
  console.log(`${property}: ${car1[property]}`);
}

for (let [key, value] of Object.entries(car1)) {
  console.log(`${key}: ${value} con object.entries`);
}
