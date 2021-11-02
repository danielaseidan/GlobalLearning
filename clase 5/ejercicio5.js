
//ejercicio 5: hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que lo identifique.

function findUnique(array){
    return array.find (item => array.indexOf (item) == array.lastIndexOf (item));
}

let array = [ 2, 2, 2, 7, 2 ];
const uniqueValue = findUnique(array);
console.log('unique value is:  %d ', uniqueValue);