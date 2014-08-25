//Count the sum of two progressions with step 3 and 5, then remove sum of progression wit step15
var progr3Q = parseInt(999/3);
var progr5Q = parseInt(999/5);
var progr15Q = parseInt(999/15);
var a = progr3Q * ( 2 * 3 + (progr3Q - 1) * 3)/2;
var b = progr5Q * ( 2 * 5 + (progr5Q - 1) * 5)/2;
var c = progr15Q * ( 2 * 15 + (progr15Q - 1) * 15)/2;

console.log( a + b - c);