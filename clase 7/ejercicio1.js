/*
Seidan Daniela

ejercicio 1: Pensemos que tenemos que hacer un juego. 
Y lo primero que necesitamos es que se puedan crear héroes en el juego. 
Haga una función o una clase que nos sirva para crear nuestro objeto “heroe”. 
Debe tener las siguientes propiedades y valores*/

class heroe{
    constructor(name = "heroe"){
        this.name = name;
        this.position = "00";
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }
}

let heroe1 = new heroe();
let heroe2 = new heroe("mileyC");

console.log(heroe1);
console.log(heroe2);