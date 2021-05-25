/* 1. Cree un programa que lea la edad de un usuario 
      e imprima un mensaje que diga si el usuario es 
      mayor de edad o no.  */

// se le pide al usuario que ingrese su edad //
let a= prompt("insertar edad");
// se evalua si es mayor de edad o no e imprime cual de las dos cumple la condicion //
if(a<=17){
      console.log("usted es menor de edad");
}

else{
      console.log("usted es mayor de edad");
}



/*
// la manera como se hizo inicialmente //
// se imprime true y false para determinar cual afirmacion es cierta //

console.log("usted es menor de edad",a<=17);
console.log("usted es mayor de edad",a>17);
*/