const titulo = document.getElementById("textoCambiante");
const boton = document.getElementById("botonTextoCambiante");
const tituloNaranja = document.getElementById("naranja");
const btnNaranja = document.getElementById("btnNaranja");
const clickTitulo = document.getElementById("clickTitulo");


boton.addEventListener('click', () =>{    
    titulo.textContent = "Adiós";
});

btnNaranja.addEventListener('click', ()=>{
    tituloNaranja.style.color = "orange";
});

clickTitulo.addEventListener('click', ()=>{
    clickTitulo.style.color = "brown";
});

const mensaje = document.getElementById("mensaje");
mensaje.addEventListener('click', ()=>{
    mensaje.style.fontSize = "30px";
});
