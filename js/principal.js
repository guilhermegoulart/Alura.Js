var title = document.querySelector(".titulo");
title.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true; 

if(peso < 0 || peso > 1000) {
    console.log("Peso Inválido");
    pesoEhValido = false;
}

if(altura < 0 || altura > 1000){
    console.log("Altura Inválida");
    alturaEhValida = false;
}

if(alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
