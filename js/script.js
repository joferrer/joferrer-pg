


document.getElementById('nav-btn').addEventListener('click',navMostrarOcultar);

let nav_icon = document.getElementById('nav-btn');

let nav =document.getElementsByClassName('nav');
let header = document.getElementsByTagName('header');
let redes =document.getElementsByClassName('sobre-mi--redes');
let btnContactame=document.getElementsByClassName('btn--normal'); 

function navMostrarOcultar(){
    nav[0].classList.toggle("nav-open");
    header[0].classList.toggle('header-open');
    nav_icon.classList.toggle('btn-open');
    redes[0].classList.toggle("redes-open");
    btnContactame[0].classList.toggle('ocultar');
    document.getElementById('logoHeader').classList.toggle('logo--principal-open');
}

