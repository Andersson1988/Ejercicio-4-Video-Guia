/* 2. Cree un programa que lea un número y muestre si este es par o impar.
 Realice una versión con condicionales y otra con estructura switch-case. */

// pedir al usuario que ingrese valor //
let numero=parseInt(prompt("ingrese numero"));

// mediante condicionales evaluar el numero y determinar si es par y mostrra mensaje en pantalla //

if(numero%2==0){
     console.log("Este numero es par",numero);
 }
if(numero%2!=0){
    console.log("Este numero es impar",numero);
}

// evaluar si el numero ingresado es par o si es impar y mostrar mensaje ne pantalla //
switch (numero%2) {
    case 0:
        console.log("Este numero es par",numero);
        
        break;

    default:
        console.log("Este numero es impar",numero);
        break;
}