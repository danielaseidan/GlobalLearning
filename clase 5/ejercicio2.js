//ejercicio 2: haga una funcion que solo reciba arreglos con mas de 5 elementos y luego elimine los 3 ultimos.

 var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
 function elem (array){
     var n= array.length;
     if (n> 5){
         array.splice(n-3);
         console.log(array);
     }
     else{
         console.log("debe ingresar al menos 5 elementos");
     }
 }
 elem (array);