'use strict';
//ejercicio1 
console.log('ejercicio 1   --------------------------');

var sandwichRecipe ={
    title : 'sandwich con salchica',
    ingredients : {'panes' : 2, 'salchica' : 4, 'cebolla' : 'al gusto'},
    levelOfDificulty : 'master chef',
    steps : 'se toman dos panes, se cortan las salchichas a la mitad y se colocan en un pan, se corta cebolla y se ponen despues de la salchicha y se cierra con el otro pan.'

}

console.log(sandwichRecipe);
// 

//ejecicio2
console.log('ejercicio 2   --------------------------');


var contacts = [{
    name : 'Alan',
    homeTelephone : 9730303,
    workTelephone : 449873490,
    cellPhone : 449897879,
    address : {street: 'Las huertas', number: 611, country: 'Mexico'}
},
{
    name : 'Abraham',
    homeTelephone : 9939398,
    workTelephone : 449786545,
    cellPhone : 449837363,
    address : {street: 'La Herradura', number: 6, country: 'Mexico'}
},
{
     name : 'Salvador',
    homeTelephone : 9735393,
    workTelephone : 449876598,
    cellPhone : 449893838,
    address : {street: 'manzanas', number: 11, country: 'Mexico'}
},
{
    name : 'Santiago',
    homeTelephone : 26899838,
    workTelephone : 449938373,
    cellPhone : 449837363,
    address : {street: 'pinos', number: 89, country: 'Mexico'}
},
{
    name : 'Carlos',
    homeTelephone : 2689897,
    workTelephone : 449938383,
    cellPhone : 449973638,
    address : {street: 'amsterdam', number: 8, country: 'Mexico'}
},
{
    name : 'Carla',
    homeTelephone : 973635,
    workTelephone : 449939383,
    cellPhone : 449938373,
    address : {street: 'concepcion', number: 9, country: 'Mexico'}
}]
function filter (contacts, letras) {
    var resultContacts = [];
    for (var i = 0; i < contacts.length; i++) {
        if(letras == contacts[i].name.charAt(0)){
            resultContacts.push(contacts[i].name);
        }
    };
    console.log(resultContacts);
}

filter(contacts,'A');
filter(contacts,'C');
filter(contacts,'S');
// 
//ejecicio3
console.log('ejercicio 3   --------------------------');

var a1 = {
    x: 15,
    y: 5
    };
var a2 = {
    x: 20,
    y: 7
    };
var a3 = {
    x: -15,
    y: 10,
    };


function aEqual (a1, a2) {
    if (a1.x == a2.x && a1.y == a2.y) {
        console.log('los vectores son iguales')
    } else{
       console.log('los vectores son diferentes') 
    };
}

aEqual(a1,a2);

var a3 = {
    x: -25,
    y: 2,
    dist: function distanceTo (aRef) {
        return Math.sqrt(Math.pow((aRef.x - this.x),2)+Math.pow((aRef.y - this.y),2));
    }
}
console.log(a3.dist(a1));