/* 4. Cree un programa que reciba tres números y muestre el mayor. 
En caso de que los números sean iguales también se debe mostrar al usuario. */

// se le pide la usuario que ingrese tres valores numericos enteros // 
let a= parseInt(prompt("ingrese primer valor"));
let b= parseInt(prompt("ingrese segundo valor"));
let c= parseInt(prompt("ingrese tercer valor"));

// se evalua mediante condiciones cual es la certada y se imprime en pantalla //

if(a>b&&a>c){
     console.log("a es mayor que b y c, su valor es:",a);
 }
else if(b>a&&b>c){
    console.log("b es mayor que a y c, su valor es:",b);
}
else if(c>a&&c>b){
    console.log("c es mayor que y b, su valor es:",c);
}
else{
    console.log("a b y c son iguales sus valores son:",a);
} 



/*
// manera como se hizo inicialmente para determinar mediante true o false 
cual afirmacion es veradera e imprimirlo en pantalla //

console.log("a mayor o igual que b y c:",a>=b && a>=c);
console.log("b mayor o igual que a y c:",b>=a && b>=c);
console.log("c mayor o igual que a y b:",c>=a && c>=b);
*/