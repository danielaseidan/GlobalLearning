/*ejercicio 8: Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero
El lobo solo puede comer a la oveja que tiene a su derecha */

function warnSheep (array){
    let posicionLobo = array.indexOf ("wolf");
    let ovejasEnLaDerecha = array.slice(posicionLobo).length -1;
    let texto = ovejasEnLaDerecha == 0? "no sigas comiendo ovejas " : "hey! oveja numero  "+ovejasEnLaDerecha+"! El lobo esta cerca "; 
    console.log(array);
    console.log(texto);
}

warnSheep(["sheep", "sheep", "wolf", "sheep"]);
warnSheep(["sheep", "sheep", "sheep", "wolf"]);