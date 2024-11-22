"use strict"

const productObject4 = {
  productName: 'Tablet',
  price: 4000,
  available: true
}

productObject4.available = false
console.log("Modo estricto", productObject4)

// Para congelar un objeto hay que habilitar el modo estricto, no permite agregar ni eliminar, ni editar propiedades
productObject4.image = 'image.png'
Object.freeze(productObject4)
productObject4.icon = 'icon.svg'
console.log("Usando el método freeze", productObject4)

// Sellar un objeto, no permite eliminar, ni agregar pero si permite editar propiedades existentes.
const productObject5 = {
  productName: 'Celular',
  price: 1000,
  available: true
}
productObject5.image = 'image.png'
Object.seal(productObject5)
productObject5.icon = 'icon.svg'
console.log("Esto no se renderiza porque no se puede agregar una propiedad usando el método seal:", productObject5)