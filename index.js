const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
const panelAside = document.querySelector(".aside-oculto");
const iconoCruzNav = document.querySelector(".cerrar-modal-nav");
const tarjetaProyectosPersonales = document.getElementById(
  "proyectos-personales"
);
const modalProyectosPersonales = document.querySelector(
  ".modal-proyectos-personales"
);

const iconoSol = document.querySelector(".fa-sun");
const iconoLuna = document.querySelector(".fa-moon");
const body = document.querySelector("body");

const botonCerrarProyectosPersonales = document.querySelector(
  "#cerrar-proyectos-personales"
);

const carouselItem = document.querySelector(".carousel");
const webhook = document.querySelector(".webhook");

iconoHamburguesa.onclick = () => {
  panelAside.classList.remove("aside-oculto");
};

iconoCruzNav.onclick = () => {
  panelAside.classList.add("aside-oculto");
};

iconoLuna.onclick = () => {
  body.classList.add("oscuro");
};

iconoSol.onclick = () => {
  body.classList.remove("oscuro");
};

tarjetaProyectosPersonales.onclick = () => {
  modalProyectosPersonales.style.display = "flex";
};

botonCerrarProyectosPersonales.onclick = () => {
  modalProyectosPersonales.style.display = "none";
};

let maxScrollLeft = carouselItem.scrollWidth - carouselItem.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
  intervalo = setInterval(function () {
    carouselItem.scrollLeft = carouselItem.scrollLeft + step;
    if (carouselItem.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carouselItem.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carouselItem.addEventListener("mouseover", () => {
  stop();
});

carouselItem.addEventListener("mouseout", () => {
  start();
});

start();
