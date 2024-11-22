const profile1 = {
  lastName: "Romero",
  price: 2200,
  available: true,
};
// Primera forma para acceder a un valor
console.log(profile1);
console.log(
  "Como acceder a un valor específico de un objeto:",
  profile1.lastName
);
// Segunda forma para acceder a un valor
console.log(
  "Como acceder a un valor específico de un objeto de otra forma:",
  profile1["lastName"]
);
