var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


console.log(paciente);
console.log(tdPeso);
console.log(tdAltura);
console.log(peso);
console.log(altura);

if(peso <0 || peso >1000){
    console.log("Peso Invalido");
}

if(altura < 0 || altura > 4){
    console.log("Altura Invalida");
}



var tdImc = paciente.querySelector(".info-imc");

var imc = peso/(altura*altura);

tdImc.textContent = imc;


console.log(imc);