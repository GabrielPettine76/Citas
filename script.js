const boton = document.getElementById('cambiar-cita');
const cita = document.getElementById('cita');
const autor = document.getElementById('autor');

function generarAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

function cambiarCita(){
    let indeceAleatorio= generarAleatorio(0,citas.length);
    cita.innerText=`"${citas[indeceAleatorio].texto}"`;
    autor.innerText= citas[indeceAleatorio].autor;
}

cambiarCita();

boton.addEventListener('click',cambiarCita);