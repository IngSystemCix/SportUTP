/* Cerrar el menú */

const botonCerrar = document.querySelector('#cerrar_menu');
const menu = document.querySelector('#menu');
const span = Array.from(document.querySelectorAll('span'));
const a = Array.from(document.querySelectorAll('a'));
const small = Array.from(document.querySelectorAll('small'));
const modos = document.querySelector('#modos');
const logo = document.querySelector('#logo');
const contendor_avatar = document.querySelector('#contendor_avatar');

let menuCerrado = false;

function cerrar_menu() {
    if (menuCerrado) {
        menu.style.width = "";
        span.forEach(span => span.classList.remove('ocultar_texto'));
        a.forEach(a => a.classList.add('gap-7'));
        modos.classList.add('p-3');
        modos.classList.remove('flex-col');
        logo.classList.add('gap-4');
        logo.classList.add('p-3');
        logo.classList.remove('p-1');
        small.forEach(s => s.style.transform = "");
        contendor_avatar.classList.remove('p-1');
        contendor_avatar.classList.add('p-3');
    } else {
        menu.style.width = "65px";
        span.forEach(span => span.classList.add('ocultar_texto'));
        a.forEach(a => a.classList.remove('gap-7'));
        modos.classList.add('flex-col');
        modos.classList.remove('p-3');
        logo.classList.remove('gap-4');
        logo.classList.remove('p-3');
        logo.classList.add('p-1');
        small.forEach(s => s.style.transform = "rotate(-90deg)");
        contendor_avatar.classList.remove('p-3');
        contendor_avatar.classList.add('p-1');
    }

    menuCerrado = !menuCerrado;
}

function cerrar_menu_responsive () {
    if (window.innerWidth <= 768) {
        if (menuCerrado) {
            menu.style.width = "";
            span.forEach(span => span.classList.remove('ocultar_texto'));
            a.forEach(a => a.classList.add('gap-7'));
            modos.classList.add('p-3');
            modos.classList.remove('flex-col');
            logo.classList.add('gap-4');
            logo.classList.add('p-3');
            logo.classList.remove('p-1');
            small.forEach(s => s.style.transform = "");
            contendor_avatar.classList.remove('p-1');
            contendor_avatar.classList.add('p-3');
        } else {
            menu.style.width = "65px";
            span.forEach(span => span.classList.add('ocultar_texto'));
            a.forEach(a => a.classList.remove('gap-7'));
            modos.classList.add('flex-col');
            modos.classList.remove('p-3');
            logo.classList.remove('gap-4');
            logo.classList.remove('p-3');
            logo.classList.add('p-1');
            small.forEach(s => s.style.transform = "rotate(-90deg)");
            contendor_avatar.classList.remove('p-3');
            contendor_avatar.classList.add('p-1');
        }
    }
}

botonCerrar.addEventListener('click', cerrar_menu);

window.addEventListener('resize', cerrar_menu_responsive);