/* 4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no.
 Realice una versión con condicionales y otra con estructura switch-case. */

 // ingrese un numero entero entre 1 y 15 para saber si es un numero primo //
 let valor=parseInt(prompt("ingrese un numero entero entre 1 y 15"));

 // verificar valor ingresado y determinar si es primo o no e imprimir la respuesta //
 if(valor==1){
   console.log("El numero 1 no es considerado ni primo ni compuesto",valor);
 }

 if(valor==2 || valor==3 || valor==5 || valor==7 || valor==11 || valor==13){
   console.log("Este numero es primo",valor);
 }

 if(valor==4 || valor==6 || valor==8 || valor==9 || valor==10 || valor==14 || valor==15){
   console.log("Este numero no es primo",valor);
 }

 

// verificar valor ingresado y determinar si es primo o no e imprimir la respuesta //
 
 switch (valor){
     case 1:
        console.log("El numero 1 no es considerado ni primo ni compuesto",valor);
         break;

     case 2:
        console.log("Este numero es primo",valor);
         break;

     case 3:
        console.log("Este numero es primo",valor);
         break;

     case 4:
        console.log("Este numero no es primo",valor);
         break;

     case 5:
        console.log("Este numero es primo",valor);
         break;

     case 6:
        console.log("Este numero no es primo",valor);
         break;

     case 7:
        console.log("Este numero es primo",valor);
         break;

     case 8:
        console.log("Este numero no es primo",valor);
         break;

     case 9:
        console.log("Este numero no es primo",valor);
         break;

     case 10:
        console.log("Este numero no es primo",valor);
         break;

     case 11:
        console.log("Este numero es primo",valor);
         break;

     case 12:
        console.log("Este numero no es primo",valor);
         break;

     case 13:
        console.log("Este numero es primo",valor);
         break;

     case 14:
        console.log("Este numero no es primo",valor);
         break;

     case 15:
        console.log("Este numero no es primo",valor);
         break;
 
     default:
         console.log("Dato no aceptado por favor de nuevo ingrese un numero entero entre 1 y 15")
         break;
 } 



























 /*

if(valor==1){
   console.log("este numero no se concidera ni primo ni compuesto",valor);
}

if(valor==2){
   console.log("este numero es primo");
} 

if(valor==3){
   console.log("este numero es primo");
} 

if(valor==5){
   console.log("este numero es primo");
} 

if(valor==7){
   console.log("este numero primo");
} 

if(valor==11){
   console.log("este numero es primo");
} 

if(valor==13){
   console.log("este numero es primo");
} 

if(valor%2==0 || valor%3==0 || valor%5==0 || valor%7==0 || valor%11==0 ||valor%13==0){
    console.log("Este numero no es primo");
 }


switch (valor) {
   case 1:
      console.log("este numero no es primo");
      
      break;

    
   default:
      console.log("ingrese valor adecuado");
      break;
}
*/