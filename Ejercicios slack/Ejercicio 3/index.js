/* 3. Cree un programa que lea un número y muestre si este  es divisible 
entre cinco o no. Realice una versión con condicionales y otra con estructura
 switch-case. */

// pedir al usuario que ingrese un valor numerico entero//
let numero=parseInt(prompt("ingrese numero"));

// mediante condicionales evaluar el numero y determinar si es divisible entre 5 y mostrra mensaje en pantalla //
if(numero%5==0){
     console.log("Este numero es divisible entre 5",numero);
 }
if(numero%5!=0){
    console.log("Este numero no es divisible entre 5",numero);
}

// evaluar si el numero ingresado es divisible po 5 y mostrar mensaje ne pantalla //
switch (numero%5) {
    case 0:
        console.log("Este numero es divisible entre 5",numero);
        
        break;

    default:
        console.log("Este numero no es divisible entre 5",numero);
        break;
}