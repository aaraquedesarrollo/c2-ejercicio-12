const generarNumero = () => Math.floor(Math.random() * (11 - 1) + 1);
const numeroGenerado = generarNumero();

const botonAdivinar = document.querySelector(".adivinar");
const numeroElemento = document.querySelector(".numero");
botonAdivinar.addEventListener("click", (e) =>
  comprobarNumero(numeroElemento.textContent)
);

const comprobarNumero = (numeroInput) => {
  if (numeroInput > numeroGenerado) {
    //
  } else if (numeroInput < numeroGenerado) {
    //
  } else {
    //
  }
};
