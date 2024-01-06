const en_vivo = document.querySelector('#en_vivo');
const publicidad = document.querySelector('#publicidad');
const enfrentamientos_diarios = document.querySelector('#enfrentamientos_diarios');

function adaptar_contenido () {
    if (window.innerWidth <= 768) {
        en_vivo.classList.remove('row-span-2');
        publicidad.classList.remove('col-span-3');
        enfrentamientos_diarios.remove('row-start-2', 'row-end-4');
    }else {
        en_vivo.classList.add('row-span-2');
        publicidad.classList.add('col-span-3');
        enfrentamientos_diarios.add('row-start-2', 'row-end-4');
    }
}

window.addEventListener('resize', adaptar_contenido);