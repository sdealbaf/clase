'use strict';
//ejercicio1
console.log('ejercicio 1 ------');

function sign (numb) {
    if (numb < 0) {
        console.log('-');
    } else{
        console.log('+');
    };
}
sign(-80);
sign(5000);

//

//ejecicio2
console.log('ejercicio 2 ------');

function order(x,y,z){
    if (x < y && x < z) {
        if (y < z) {
            console.log(x+','+y+','+z);
        } else{
            console.log(x+','+z+','+y);
        };
    } 
    if (y < x && y <z) {
        if (x < z) {
            console.log(y+','+ x +','+z);
        } else{
            console.log(y+','+z+','+x);
        };
    }
    if (z < x && z < y) {
        if (x < y) {
            console.log(z+','+x+','+ y);
        } else{
            console.log(y +','+ y +','+ x);
        };
    }
}

order(10,-6,2);
order(8,-13,-3);

//

//ejecicio3
console.log('ejercicio 3 ------');

function minimum (a,b,c,d,e){
    if (a < b && a < c && a < d && a < e) {
        return a;
    };
    if (b < a && b < c && b < d && b < e) {
        return b;
    };
    if (c < n1 && c < n2 && c < d && c < e) {
        return c;
    };
    if (d < n1 && d < b && d < c && d < e) {
        return d;
    };
    if (e < a && e < b && e < c && e < d) {
        return e;
    };
    
}

console.log(minimum(-5, 8, 20, 34, 7));
console.log(minimum(3,-4, 7,-1,54));