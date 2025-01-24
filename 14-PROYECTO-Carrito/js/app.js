const cart = document.querySelector("#carrito");
const cartContainer = document.querySelector("#lista-carrito tbody");
const cartClearButton = document.querySelector("#vaciar-carrito");
const courseList = document.querySelector("#lista-cursos");
let cartCheckout = [];

// Registrar todos los eventos

loadAllEventListeners();

function loadAllEventListeners() {
  courseList.addEventListener("click", addCourse);
  cart.addEventListener("click", deleteCourse);
  cartClearButton.addEventListener("click", clearCart);
}

function addCourse(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const courseSelected = e.target.parentElement.parentElement;
    readInfoCourse(courseSelected);
  }
}
// Leer los datos del curso
function readInfoCourse(course) {
  // Crear un objeto
  const courseObj = {
    imagen: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".precio span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
    currentCount: 1,
  };

  // Revisar si un curso ya existe en el carrito
  const hasCourse = cartCheckout.some((course) => course.id === courseObj.id);
  if (hasCourse) {
    const courses = cartCheckout.map((course) => {
      if (course.id === courseObj.id) {
        course.currentCount++;
        return course;
      } else {
        return course;
      }
    });
    cartCheckout = [...courses];
  } else {
    // Llenar carrito
    cartCheckout = [...cartCheckout, courseObj];
  }
  createCartHtml();
}

// Mostrar el carrito en el DOM
function createCartHtml() {
  // Limpiar html
  clearHtml();

  // Recorre el carrito y genera el html
  cartCheckout.forEach((course) => {
    const { imagen, title, price, currentCount, id } = course;
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td>
        <img src="${imagen}" width=100 />
      </td>
      <td>
        ${title}
      </td>
      <td>
        ${price}
      </td>
      <td>
        ${currentCount}
      </td>
      <td>
        <a class="borrar-curso" data-id='${id}'> X </a>
      </td>
    `;

    // Agrega html en tbody
    cartContainer.appendChild(tableRow);
  });
}

function clearHtml() {
  // Forma lenta
  // cartContainer.innerHTML = "";
  // Forma performante
  while (cartContainer.firstChild) {
    cartContainer.removeChild(cartContainer.firstChild);
  }
}

function deleteCourse(e) {
  e.preventDefault();
  if (e.target.classList.contains("borrar-curso")) {
    const courseId = e.target.getAttribute("data-id");
    // Eliminar del array de carrito
    cartCheckout = cartCheckout.filter((course) => course.id !== courseId);
    createCartHtml();
  }
}

function clearCart() {
  cartCheckout = [];
  clearHtml();
}
