const marcaActualizada = document.querySelector('#div__marca');
var year_actual = new Date().getFullYear();

marcaActualizada.textContent = "© IngSystemCix | 2020 - " + year_actual;

/* Modo oscuro y claro */

const toggle_mode = document.querySelector('#toggle__oscuro_claro');
const icon_sol = document.querySelector('#sun');
const icon_luna = document.querySelector('#moon');
const footerModo = document.querySelector('#footer');

function modos_toggle () {
    icon_sol.classList.toggle('text-transparent');
    document.documentElement.classList.toggle('dark');
    toggle_mode.classList.toggle('justify-end');
    footerModo.classList.toggle('darkFooter');
}

toggle_mode.addEventListener('click', modos_toggle)

/* Mostrar contraseña */

const input_pass = document.querySelector('#pass');
const ojo = document.querySelector('#ojo');

function activar_mostrar_pass () {
    ojo.style.display = input_pass.value !== "" ? "block" : "none";
}

function mostrar_pass() {
    ojo.classList.toggle('bi-eye');
    if (input_pass.type === "password") {
        input_pass.type = "text";
    }else {
        input_pass.type = "password";
    }
}

input_pass.addEventListener('input', activar_mostrar_pass);
ojo.addEventListener('click', mostrar_pass);

/* Limpiar input código */

const input_codigo = document.querySelector('#codigo');
const clear_input_codigo = document.querySelector('#clear');

function activar_clear() {
    clear_input_codigo.style.display = input_codigo.value !== "" ? "block" : "none";
}

function clear () {
    input_codigo.value = "";
    clear_input_codigo.style.display = "none";
}

input_codigo.addEventListener('input', activar_clear);
clear_input_codigo.addEventListener('click', clear);

/* Inicio de sesión */

const formulario = document.querySelector('#formulario');
const popup = document.querySelector('#popup');
const contenedor_principal = document.querySelector('#contenedor_principal'); //blur-sm
const close = document.querySelector('#close');

function inicioSesion (event) {
    event.preventDefault();
    contenedor_principal.classList.add('blur-sm');
    popup.classList.remove('invisible')
}

function cerrarPopup () {
    popup.style.display = "none";
    contenedor_principal.classList.remove('blur-sm');
    popup.classList.add('invisible')
}

close.addEventListener('click', cerrarPopup);
formulario.addEventListener('submit', inicioSesion);

/* Redireccionar a la página de inicio */

const botonContinuar = document.querySelector('#continuar');

function continuar_inicio () {
    window.location.href = "inicio";
}

botonContinuar.addEventListener('click', continuar_inicio);