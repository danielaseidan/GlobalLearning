//ejercicio 3: teniendo un arreglo numerico, tenemos que sumarle un numero (por parametro) a cada elemento de nuestro arreglo.

function sumar(numero){
    let array = [7, 4, 9, 0, 2];
    console.log(array);
    array.forEach((item , index) => array[index] = item + numero);
    console.log(array);
}

sumar(10);