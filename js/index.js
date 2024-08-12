var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");

var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");



document.addEventListener("DOMContentLoaded", function () {
    flecha1.classList.add("iDerecha");
    d1.classList.add("sDerecha");
    flecha2.classList.add("iDerecha");
    d2.classList.add("sDerecha");
    flecha3.classList.add("iDerecha");
    d3.classList.add("sDerecha");
})

var flecha1 = document.getElementById("i1");
var posicion1 = true;
flecha1.addEventListener("click", function () {

    if (posicion1) {
        s1.scrollLeft = 3000;
        posicion1 = false;
    } else {
        s1.scrollLeft = 0;
        posicion1 = true;
    }
    d1.classList.toggle("sDerecha");
    flecha1.classList.toggle("iDerecha");
    d1.classList.toggle("sIzquierda");
    flecha1.classList.toggle("iIzquierda");

});

var flecha2 = document.getElementById("i2");
var posicion2 = true;
flecha2.addEventListener("click", function () {
    if (posicion2) {
        s2.scrollLeft = 3000;
        posicion2 = false;
    } else {
        s2.scrollLeft = 0;
        posicion2 = true;
    }
    d2.classList.toggle("sDerecha");
    flecha2.classList.toggle("iDerecha");
    d2.classList.toggle("sIzquierda");
    flecha2.classList.toggle("iIzquierda");
});

var flecha3 = document.getElementById("i3");
var posicion3 = true;
flecha3.addEventListener("click", function () {
    if (posicion3) {
        s3.scrollLeft = 3000;
        posicion3 = false;
    } else {
        s3.scrollLeft = 0;
        posicion3 = true;
    }
    d3.classList.toggle("sDerecha");
    flecha3.classList.toggle("iDerecha");
    d3.classList.toggle("sIzquierda");
    flecha3.classList.toggle("iIzquierda");
});

var desplegable = document.getElementById("desplegable");
var despliegue = document.getElementById("despliegue");
var fuera = false;
window.addEventListener("resize", function(){
    if(window.innerWidth <= 800){
        $(despliegue).hide();
    }
    if(window.innerWidth >= 800){
        $(despliegue).show();
    }
})

if(window.innerWidth <= 800){
    $(despliegue).hide();
}
if(window.innerWidth >= 800){
    $(despliegue).show();
}

desplegable.addEventListener("click", function () {
    desplegable.classList.toggle("cambios");
    if(!fuera){
        $(despliegue).show(200);
        fuera = true;
    }else{
        $(despliegue).hide(200);
        fuera = false;
    }    
})

