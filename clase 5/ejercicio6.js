//ejercicio 6: dado un arreglo de números enteros, encuentre la menor suma posible entre ellos.

var arreglo = [3, 7, 9, 5, 1];
arreglo.sort(function(a, b) {return a - b}); //ordeno el array de menor a mayor
var pri = arreglo.shift(); //elimino el primer componente
console.log("el primer elemento mas chico es ", pri);
var seg = arreglo.shift(); //elimino el segundo componente de nuevo
console.log("el segundo elemento mas chico es " , seg);
var sum = pri + seg;
console.log('la suma entre los numeros mas chicos es %d' , sum); 