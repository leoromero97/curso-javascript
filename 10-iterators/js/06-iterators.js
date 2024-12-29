const tasks1 = ["Hacer la tarea", "Comer", "Entrenar", "Dormir"];
// ForEach no crea un array nuevo
tasks1.forEach((task, index) => console.log(`${index + 1}. ${task}`));
// Map crea un array nuevo
const newArrayByTasks1 = tasks1.map((task, index) => {
  console.log(`${index + 1}. ${task}`);
  return `${index + 1}. ${task}`;
});

console.log(newArrayByTasks1);
