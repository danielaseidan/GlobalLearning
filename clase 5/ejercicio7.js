//ejercicio 7: dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes.

function adjacentElementProduct (array){
    let minResult = array [0] * array [1];
    for (i=0; i<array.length; i++){
        let partialResult = array [i-1] * array [i];
        if (minResult < partialResult){
            minResult = partialResult;
        }
    }
    console.log(minResult);
    return minResult;
}

adjacentElementProduct ([3,7,8,1,6]);