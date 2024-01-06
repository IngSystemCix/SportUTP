const modoClaro = document.querySelector('#modo_claro');
const modoOscuro = document.querySelector('#modo_oscuro');
const modoTemaPC = document.querySelector('#modo_tema_pc');
const contenidoPrincipal = document.querySelector('#contenido_principal');

function activarModoClaro() {
    document.documentElement.classList.remove('dark');
    contenidoPrincipal.classList.remove('main_dark');
    aplicarEstilos(modoClaro);
}

function activarModoOscuro() {
    document.documentElement.classList.add('dark');
    contenidoPrincipal.classList.add('main_dark');
    aplicarEstilos(modoOscuro);
}

function activarModoThemePC() {
    const temaOscura = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (temaOscura) {
        activarModoOscuro();
    } else {
        activarModoClaro();
    }
}

function aplicarEstilos(elemento) {
    [modoClaro, modoOscuro, modoTemaPC].forEach(btn => {
        if (btn !== elemento) {
            btn.classList.remove('bg-green-600', 'dark:bg-green-600');
        }else{
            elemento.classList.add('bg-green-600', 'dark:bg-green-600');
            elemento.classList.remove('dark:bg-slate-300');
        }
    });
}

modoClaro.addEventListener('click', activarModoClaro);
modoOscuro.addEventListener('click', activarModoOscuro);
modoTemaPC.addEventListener('click', activarModoThemePC);
