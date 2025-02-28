console.log("script.js loaded"); // Added log to confirm script execution

function showModal(message) {
  const modal = document.getElementById("myModal");
  if (modal.style.display === "block") {
    modal.style.display = "none"; // Close the modal if it's already open
  }
  document.getElementById("modalResult").innerText = message;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function ejercicio1() {
  showModal("¡Hola, Mundo!");
}

function validateInput(input) {
  const value = parseFloat(input);
  if (isNaN(value)) {
      showModal("Por favor, ingresa un número válido.");
      return null;
  }
  return value;
}

function ejercicio2() {
  console.log("ejercicio2 called"); // Log to confirm function call
  const nombre = document.getElementById("input2").value;

  if (!nombre) {
      showModal("Por favor, ingresa tu nombre.");
      return;
  }
  showModal(`¡Hola, ${nombre}!`);
  console.log("Greeting displayed for:", nombre); // Added log to confirm greeting display
}

document.getElementById("btn2").addEventListener("click", function() {
  console.log("Button clicked"); // Log to confirm button click
  ejercicio2();
});

function ejercicio3() {
  console.log("ejercicio3 called");

  const num = validateInput(document.getElementById("input3").value);
  if (num === null) return;
  
  const duplicado = num * 2;
  showModal(`El doble de ${num} es ${duplicado}.`);
}

function ejercicio4() {
  console.log("ejercicio4 called");

  const a = validateInput(document.getElementById("input4a").value);
  const b = validateInput(document.getElementById("input4b").value);
  const c = validateInput(document.getElementById("input4c").value);
  if (a === null || b === null || c === null) return;

  const promedio = (a + b + c) / 3;
  showModal(`El promedio es ${promedio}.`);
}

function ejercicio5() {
  console.log("ejercicio5 called");

  const a = validateInput(document.getElementById("input5a").value);
  const b = validateInput(document.getElementById("input5b").value);
  if (a === null || b === null) return;

  const mayor = (a > b) ? a : b;
  showModal(`El número mayor es ${mayor}.`);
}

function ejercicio6() {
  console.log("ejercicio6 called");

  const num = parseFloat(document.getElementById("input6").value);
  if (isNaN(num)) {
      showModal("Por favor, ingresa un número válido.");
      return;
  }
  const cuadrado = num ** 2;
  showModal(`El cuadrado de ${num} es ${cuadrado}.`);
}
