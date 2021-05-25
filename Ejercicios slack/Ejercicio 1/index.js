/* 1. Cree un programa que lea los tres ángulos internos de un triángulo
 y muestre si los ángulos corresponden a un triángulo o no. 
 Realice una versión con condicionales y otra con estructura switch-case. */

 //pedir al usuario ingresar valores de los angulos//
let a=parseFloat(prompt("inserte el valor del angulo A en valor decimal"));
let b=parseFloat(prompt("inserte el valor del angulo B en valor decimal"));
let c=parseFloat(prompt("inserte el valor del angulo C en valor decimal"));
// Variable con la suma de valores de angulos //
let valor=a+b+c;
// Evaluar si suma de angulos corresponden a un triangulo o no e imprimir mensaje //
if(valor==180){
    console.log("este es un triangulo sus angulos internos suman 180");
}
if(valor!=180){
    console.log("este no es un triangulo sus angulos internos nosuman 180");
} 

// Evaluar si el valor dado coincide con la suma de los angulos internos de un triangulo //
switch (valor) {
    case 180:
        console.log("este es un triangulo sus angulos internos suman 180");
        break;
// En caso de que no se cumpla el valor determinado mostrar mensaje de no es un triangulo //
    default:
        console.log("este no es un triangulo sus angulos internos no suman 180");
        break;
}

