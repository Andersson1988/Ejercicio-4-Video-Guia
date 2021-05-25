/* 3. Cree un programa que reciba dos números y muestre el mayor.
 En caso de que los números sean iguales también se debe mostrar 
 al usuario. */


// se le pide al usuraio que por favor ingrese el valor de dos numeros //
let a= parseInt(prompt("ingrese primer valor"));
let b= parseInt(prompt("ingrese segundo valor"));

// verificar las condiciones y determinar cual es la correcta e imprimirla en pantalla //
if(a>b){
     console.log("a es mayor que b, su valor es:",a);
 }
else if(b>a){
    console.log("b es mayor que a, su avlor es:",b);
}
else{
    console.log("a y b son iguales, sus valore son:",a);
} 


/*
// manera como se realizo inicialmente mediante true y false 
para determinar cual la correcta e imprimirlo en pantalla. //

console.log("a mayor o igual que b:",a>=b);
console.log("b mayor o igual que a:",a<=b);
*/