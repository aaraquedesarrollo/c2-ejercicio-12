const generarNumero = () => Math.floor(Math.random() * (11 - 1) + 1);
const numeroGenerado = generarNumero();

const botonAdivinar = document.querySelector(".adivinar");
const numeroElemento = document.querySelector(".numero");
botonAdivinar.addEventListener("click", (e) => {
  if (botonAdivinar.valueAsNumber !== undefined) {
    comprobarNumero(numeroElemento.valueAsNumber);
  }
});

const comprobarNumero = (numeroInput) => {
  const mensajeElemento = document.querySelector(".mensaje");
  if (numeroInput > numeroGenerado) {
    mensajeElemento.textContent = "El numero que has introducido es mas grande";
    mensajeElemento.classList.add("error");
  } else if (numeroInput < numeroGenerado) {
    mensajeElemento.textContent =
      "El numero que has introducido es mas pequeño";
    mensajeElemento.classList.add("error");
  } else {
    mensajeElemento.textContent = "Has acertado!";
    mensajeElemento.classList.remove("error");
    mensajeElemento.classList.add("acierto");
    botonAdivinar.disabled = true;
    numeroElemento.disabled = true;
  }
};
