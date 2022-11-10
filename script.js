let header = document.getElementById("header")
header.style.opacity = "1"
    //cambio de imagenes de proyectos
let leerMas = document.getElementById("leerMas");
let endText = document.getElementById("endText");
let expand = document.getElementById("expand");
let cerrar = document.getElementById("cerrar");
let text = document.getElementById("text");
let inicio = Array.from(document.getElementsByClassName("inicio"))
let middle = Array.from(document.getElementsByClassName("middle"))
let fin = Array.from(document.getElementsByClassName("fin"))
leerMas.addEventListener("click", ()=>{
    leerMas.setAttribute("hidden", "")
    endText.removeAttribute("hidden")
    cerrar.removeAttribute("hidden")
    expand.classList.add("extend")
    text.classList.add("extendp")
})


cerrar.addEventListener("click", ()=>{
    cerrar.setAttribute("hidden", "")
    endText.setAttribute("hidden", "")
    leerMas.removeAttribute("hidden")
    expand.classList.remove("extend")
    text.classList.remove("extendp")
})

