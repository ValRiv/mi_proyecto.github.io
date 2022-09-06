"use strict";
//PROYECTO FINAL INTEGRADOR DE JAVASCRIPT

//"<----------------NAVBARFUNCIONAL--------------------------->")
const menu = document.querySelector(".menu");
const openMenuBtn=document.querySelector(".open-menu");
const closeMenuBtn=document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_opened");
}
openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach(menuLink => {
menuLink.addEventListener("click", function(){
    menu.classList.remove("menu_opened");
})
 
})

//"<----------------FORMULARIO DE CONTACTO--------------------->")

const ingresar= document.getElementById('btnIngresar'); 
    ingresar.onclick = () => {
    const usuario = document.querySelector("#usuario").value;
    const email = document.querySelector("#email").value;
    const mensaje = document.querySelector("#mensaje").value;

   /*if (usuario == "" || email == "" || mensaje=="") {
        alert("Indique usuario, email y mensaje");
        return;
    }*/
    //---------------VALIDAR USUARIO Y EMAIL--------------------------
    const user= /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    const userValido= user.test(usuario);
    const expReg= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const correovalido= expReg.test(email);
    
    
    
    //----------------LOCALSTORAGE--------------------------------------------//
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);

    const nombre = localStorage.getItem('usuario');
    const emailnuevo = localStorage.getItem('email');

    const userIncorr = document.querySelector("#usuarioNoValido");
    const correoIncorr = document.querySelector("#correoNoValido");
    const mensajeVacio= document.querySelector("#mensajeVacio");

    const p1 = document.querySelector("#usuarioLogeado");
    const p2 = document.querySelector("#emailLogeado");
    
    if (userValido === true) {
        console.log("El usuario es valido") 
        usuarioLogeado.textContent="Bienvenid@!!!  "  + localStorage.getItem("usuario") + " gracias por su mensaje!!!";

    }else if(usuario == "")  {
        console.log("El usuario no es valido")
        usuarioNoValido.textContent= "El usuario no es valido"
    }
    
    if (correovalido=== true) {
        console.log("El correo es valido")
    } else if(email == ""){
        console.log("El correo no es valido")
        correoNoValido.textContent="El correo no es valido" 
        usuarioLogeado.textContent="Bienvenid@!!!  "  + localStorage.getItem("usuario") + " ingrese nuevamente tu email, por favor!!";
    }

    if (mensaje=="") {
        console.log("Mensaje vacio")
        mensajeVacio.textContent="Ingrese un mensaje"
        usuarioLogeado.textContent="Bienvenid@!!!  "  + localStorage.getItem("usuario") + " ingrese su mensaje, por favor!!";
    } 
    
    const login = document.getElementById('login');
    login.classList.add("hidden");
    const logout = document.getElementById('logout');
    logout.classList.remove("hidden");

    }
   
    const cargar = document.getElementById('btnSalir');
    cargar.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});
/*--------------------EXPRESIONES REGULARES PARA VALIDAR-------------
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	//usuario: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	//password: /^.{4,12}$/, // 4 a 12 digitos.
	//EMAIL= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	//telefono: /^\d{7,14}$/ // 7 a 14 numeros.
   
*/


