let header = document.getElementById("header")
header.style.opacity = "1"
    //cambio de imagenes de proyectos
let imagenGif = document.getElementById("imagen-gifs");
imagenGif.addEventListener("mouseover", () =>  {imagenGif.src="./assets/gifos2.png"})
imagenGif.addEventListener("mouseleave", () => {imagenGif.src="./assets/gifos1.jpeg"})

let landing = document.getElementById("imagen-landing");
landing.addEventListener("mouseover", () => {landing.src="./assets/responsive.png"})
landing.addEventListener("mouseleave", () => {landing.src="./assets/dinamicPage.jpeg"})