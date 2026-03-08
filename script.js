alert (Bienvenido, a, mi, pagina, web);
function cambiarTexto(){
document.getElementById("mensaje").innerHTML = "Gracias por visitar mi página";
}
function modoOscuro(){
document.body.style.background = "black";
document.body.style.color = "white";
}
let numero = 0;

function sumar(){
numero++;
document.getElementById("contador").innerText = numero;
}

function restar(){
numero--;
document.getElementById("contador").innerText = numero;
}
function sumarNumeros(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);

let resultado = n1 + n2;

document.getElementById("resultado").innerText = "Resultado: " + resultado;

}
function validar(){

let nombre = document.getElementById("nombre").value;

if(nombre === ""){
document.getElementById("mensaje").innerText = "Por favor escribe tu nombre";
}
else{
document.getElementById("mensaje").innerText = "Bienvenido " + nombre;
}

}