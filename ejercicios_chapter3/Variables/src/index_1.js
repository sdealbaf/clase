'use strict';
//Variables

//ejercicio1 Money exchange
console.log('ejercicio_1:')
var moneyPesos;
moneyPesos = 50;
var usdVal = 0.050;
var eurVal = 0.047;

var usd = moneyPesos * usdVal;
var eur = moneyPesos * eurVal;

console.log('Tu cantidad de ' + moneyPesos + ' equivale a '+ usd + ' dolares y ' + eur + ' euros');
//findelfin

console.log('ejercicio_2:')
//ejercicio2
var tshitPrice = 800;
var hatPrice = 700;
var jacketPrice = 2000;
var pantsPrice = 550;

var discountHat = .10;
var discountJacket = .50;

var totalHat = (hatPrice-(hatPrice * discountHat));
var totalJacket = (jacketPrice-(jacketPrice * discountJacket));

var totalFinal = (totalHat + totalJacket + tshitPrice + pantsPrice);

console.log('tshit = ' + tshitPrice);
console.log('hat = ' + hatPrice);
console.log('jacket = ' + jacketPrice);
console.log('pants = ' + pantsPrice);

console.log('hat - 10% = ' + totalHat + ' pesos');
console.log('jacket - 50% = ' + totalJacket + ' pesos');
console.log('tshit = '+ tshitPrice +' pesos');
console.log('pants = ' + pantsPrice+' pesos');
console.log('Total Final = '+ totalFinal+' pesos');
//fin ejercicio2