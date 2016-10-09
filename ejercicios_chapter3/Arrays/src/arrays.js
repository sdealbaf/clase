'use strict';
//ejercicio1
console.log('ejercicio 1 ------------------');

function firstElement (arrayFuente, nElementos) {
    var arrayDestino = [];
    for (var i = 0; i < nElementos; i++) {
        arrayDestino.push(arrayFuente[i]);
    };
    return arrayDestino;
}

console.log(firstElement([4,-8,10,4],4));
console.log(firstElement([1,3,'hola mundo',3,'adios mundo'],3));
console.log(firstElement([1,9,1,10],10));
// 

console.log('ejercicio 2 ------------------');
//ejecicio2
function union (array, symbol) {
    var resultList = '';
    for (var i = 0; i < array.length-1; i++) {
        resultList += array[i] + symbol
    };
    resultList += array[array.length-1];
    console.log(resultList);
}

union(['red','green','white','black'],'¨');
union(['red','green','white','black'],'$');
union(['red','green','white','black'],'=');
//

//ejecicio3
console.log('ejercicio 3 ------------------');

function back(array){
    var resultArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        resultArray.push(array[i]);
    };
    console.log(resultArray);

}

console.log(back([6,2,7,9]));