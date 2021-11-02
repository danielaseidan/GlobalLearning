 //ejercicio 1: haga una funcion que siempre elimine al primer elemento de un arreglo.

 const array = ['pera', 'banana', 'manzana', 'sandia'];
 function deleteFirst (array){
     array.shift();
 }
 deleteFirst(array);
 console.log(array);