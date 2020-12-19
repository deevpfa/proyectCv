let header = document.getElementById("header")
header.style.opacity = "1"
    //cambio de imagenes de proyectos
let imagenGif = document.getElementById("imagen-gifs");
imagenGif.addEventListener("mouseover", function() {imagenGif.src="/assets/gifos2.png"})
imagenGif.addEventListener("mouseleave", function(){imagenGif.src="/assets/gifos1.jpeg"})

let landing = document.getElementById("imagen-landing");
landing.addEventListener("mouseover", function(){landing.src="/assets/responsive.png"})
landing.addEventListener("mouseleave", function(){landing.src="/assets/dinamicPage.jpeg"})