'use strict';
//ejercicio1
console.log('ejercicio 1 ------');
function padres(padre, madre, hijo) {
	console.log(hijo +', es hijo de '+ padre +' y '+madre);
}

padres('Abraham', 'Lina', 'Santiago');
//

//ejercicio 2
console.log('ejercicio 2 ------');

function distance (x1,y1,x2,y2) {
	var result = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
	console.log('la distancia entre los puntos es de '+result);
}
distance(50,20,35,44);

//

//ejercicio 3
console.log('ejercicio 3 ------');

function currencyTrade (pesos, moneda) {
	var usdVal = 0.050;
    var eurVal = 0.048;
    var tradeUsd = pesos * usdVal;
    var tradeEur = pesos * eurVal;
    if (moneda === 'USD') {
         console.log('Los $' + pesos + ' pesos equivalen a $' + tradeUsd + ' dolares');
    };
    if (moneda === 'EUR') {
         console.log('Los $' + pesos + ' pesos equivalen a ' + tradeEur + ' Euros');
    };
}
currencyTrade(50,'EUR');
currencyTrade(50,'USD');
//