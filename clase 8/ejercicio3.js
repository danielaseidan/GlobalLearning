/* ejercicio 3: teniendo en cuenta la misma conferencia anterior, necesitamos crear nombre
 de usuario a cada persona registrada dependiendo del nombre y el año en el que nacieron. 
 Este nombre de usuario tiene que agregarse como una nueva propiedad llamada “userName"
*/ 

const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];
  
  list1.map((item, i) => list1[i].userName = `${item.firstName}${item.lastName}${2021 - item.age}`.toLowerCase());
  
   console.log(list1);