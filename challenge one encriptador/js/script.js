//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


//funcion para encriptar el texto

function encriptar() {

    //variaable que toma el valor de textarea textoaencriptar.value;
    var texto = document.getElementById("textoaEncriptar").value;

    //variables para cambiar el valor de las palabras
    var remplaza = texto.replaceAll(/e/img,"enter");
    var remplaza = remplaza.replaceAll(/o/img,"ober");
    var remplaza = remplaza.replaceAll(/i/img,"imes");
    var remplaza = remplaza.replaceAll(/a/img,"ai");
    var remplaza = remplaza.replaceAll(/u/img,"ufat");

    document.getElementById("textoaDesencriptar").value = remplaza;

    modificarObjetos();
}

//funcion para desencriptar el texto

function desencriptar() {

    var textoDesencriptado = document.getElementById("textoaDesencriptar").value;

    var remplaza = textoDesencriptado.replaceAll(/enter/img,"e");
    var remplaza = remplaza.replaceAll(/ober/img,"o");
    var remplaza = remplaza.replaceAll(/imes/img,"i");
    var remplaza = remplaza.replaceAll(/ai/img,"a");
    var remplaza = remplaza.replaceAll(/ufat/img,"u");

    document.getElementById("textoaEncriptar").value = remplaza;
}


function copiar() {
    let copiartexto = document.querySelector("#textoaDesencriptar");
    copiartexto.select();
    document.execCommand("copy");
}

function modificarObjetos(botonCopiar) {
    let boton = document.getElementById("botonCopiar");
    let imagen = document.getElementById("imgDesencriptar");
    let mensaje = document.getElementById("textoMensaje");
    let input = document.getElementById("textoaDesencriptar");
    
    boton.style.display = "inline";
    imagen.style.display = "none";
    mensaje.style.display = "none";
    input.style.height = "850px";
    input.style.textAlign = "left";
}






