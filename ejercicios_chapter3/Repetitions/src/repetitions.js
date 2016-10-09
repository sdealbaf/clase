'use strict';
//ejercicio1
console.log('ejercicio 1 ---------');

function average (a1,a2,a3) {
    var sum = (a1 + a2 + a3);
    return sum / average.length;
}

console.log(average(8,7,6));
//

//ejecicio2
console.log('ejercicio 2 ---------');

function padding (nLeft, nRight, text){
    var padR = [];
    var padL = [];
    while(nLeft > 0){
        padL.push('_');
        nLeft = nLeft -1;
    };
    while(nRight > 0){
        padR.push('_');
        nRight = nRight -1;
    };
    return padL + text + padR;
}
console.log(padding(5,10,'holaaaa'));
// 

//ejecicio3
console.log('ejercicio 3 ---------');



function triangle (xLines, symbol){
    var symbolLines = '';
    for (var i = 1; i <= xLines; i++) {
        for (var o = 1; o <= i; o++) {
            symbolLines += symbol
        };
        symbolLines += '\n';
    };
    console.log(symbolLines)
}

triangle(15,'*');
triangle(30,'$');
