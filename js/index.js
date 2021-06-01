const generarNumero = () => Math.floor(Math.random() * (10 - 1) + 1);
const numeroGenerado = generarNumero();

const botonAdivinar = document.querySelector(".adivinar");
botonAdivinar.addEventListener("click", (e) => comprobarNumero());
