/* 2. En un supermercado se tiene los siguientes productos: 
lentejas, crema, arroz y vino. Las lentejas y el arroz no 
pagan IVA, el vino y la crema si. Cree un programa que reciba 
el nombre de alguno de los productos mencionados y muestre si 
el producto paga IVA o no. */

// se le pide al usuario que ingrese uno de los cuatros productos que se le dan en el aviso //
let a= prompt("ingrese uno de estos productos para verificar si paga IVA: arroz,lentejas,vino,crema");

if(a=="lentejas" || a=="arroz"){
    console.log(a+", este producto no paga IVA");
}

else{
    console.log(a+", este producto paga IVA");
}


/*
// manera como se realizo inicialmente mediante true o false para determinar si paga IVA //
opciones con sus variables determinadas //

let b="lentejas";
let c="arroz";
let d="vino";
let e="crema";
console.log("Este Producto paga IVA:",((a==d)||(a==e)));
*/

