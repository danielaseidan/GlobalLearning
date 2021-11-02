
/*ejercicio 4: haga una funcion que reciba un numero y retorne un arreglo que tenga el tamaño del numero 
desde el 0 hasta el numero recibido -1 (0 a n-1). */

function creacion(x){
    var z = [];
    for(i=0; i<x; i++){
        z[i]=i;
    }
    console.log(z);
}

creacion (7);
