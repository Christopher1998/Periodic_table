// Obtiene todos los elementos con la clase "base".
//Gets all elements with class "base".
var divs = document.querySelectorAll(".base");

// Agrega un event listener a cada div.
//Add listener event on each div.
divs.forEach(function (div) {
  div.addEventListener("mouseover", increaseSize);
  div.addEventListener("mouseout", decreaseSize);
});

//Functions for zoom and reduce size.
//Funciones para aumentar y reducir el tamaño.
function increaseSize() {
  this.style.zIndex = "2";
  this.style.transform = "scale(1.3)";
}
function decreaseSize() {
  this.style.zIndex = "1";
  this.style.transform = "scale(1)";
}
//This function show window with hyperlink.
//Funcion para mostrar la pantalla del hipervinculo en la misma pantalla con un tamano defino por el usuario.
function openWindow(url) {
  // Tamaño de la ventana
  var width = 800;
  var height = 400;
  // Posición de la ventana
  //Window position.
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;
  //window parameters
  // Parámetros de la ventana
  var params =
    "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
    //Open window with specific parameters and URL.
  // Abrir la ventana con la URL especificada y los parámetros
  var win = window.open(url, "_blank", params);
}

// Asignar valores iniciales a las variables
//Assign initial values ​​to variables.
const numeroAtomicoInicial = "92";
const simboloInicial = "U";
const nombreInicial = "Uranio";
const pesoAtomicoInicial = "238.03";

//Gets the exampleInfo div.
// Obtener el div exampleInfo.
const exampleInfo = document.getElementById("exampleInfo");

//Select and update elements content with initial parameters.
// Seleccionar y actualizar el contenido de los elementos con los valores iniciales.
const numberElement = exampleInfo.querySelector(".number");
numberElement.textContent = numeroAtomicoInicial;
numberElement.classList.add("number1");

const subNameElement = exampleInfo.querySelector(".sub_name");
subNameElement.textContent = simboloInicial;
subNameElement.classList.add("sub_name1");

const elementNameElement = exampleInfo.querySelector(".element_name");
elementNameElement.textContent = nombreInicial;
elementNameElement.classList.add("element_name1");

const atomicNumberElement = exampleInfo.querySelector(".atomic_number");
atomicNumberElement.textContent = pesoAtomicoInicial;
atomicNumberElement.classList.add("atomic_number1");

//This function display information when clicking a hiperlink.
// Función para mostrar información al hacer clic en un div
function showInfo(divClickeado) {
  // Obtener el color de fondo del elemento clickeado
  const backgroundColor = window
    .getComputedStyle(divClickeado)
    .getPropertyValue("background-color");

  // Obtener la información del elemento clickeado
  const numeroAtomico = divClickeado.querySelector(".number").textContent;
  const simbolo = divClickeado.querySelector(".sub_name").textContent;
  const nombre = divClickeado.querySelector(".element_name").textContent;
  const pesoAtomico = divClickeado.querySelector(".atomic_number").textContent;

  // Actualizar el color de fondo del div exampleInfo
  exampleInfo.style.backgroundColor = backgroundColor;

  // Actualizar el contenido de los elementos con la información del elemento clickeado
  numberElement.textContent = numeroAtomico;
  subNameElement.textContent = simbolo;
  elementNameElement.textContent = nombre;
  atomicNumberElement.textContent = pesoAtomico;
}

//show element depending on chemical family.
// Mostrar elemento quimico dependiendo de la familia quimica.
function showElement(element) {
  // Obtener la clase del elemento clickeado
  var clickedClass = element.className.split(" ")[1];

  // Ocultar todos los elementos excepto los que tienen la clase clickeada
  var allElements = document.querySelectorAll(".base");
  allElements.forEach(function (item) {
    if (!item.classList.contains(clickedClass)) {
      item.classList.add("border-only");
    } else {
      item.classList.remove("border-only");
    }
  });
}

//Function restore all colors in the periodic table.
//Esta funcion restaura los colores de la tabla periodica
function restoreColors() {
  // Obtiene todos los elementos con la clase `border-only`
  var allElements = document.querySelectorAll(".border-only");
  // Recorre cada elemento y elimina la clase `border-only`
  allElements.forEach(function (item) {
    item.classList.remove("border-only");
  });
}


