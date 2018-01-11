//What is the largest prime factor of the number 600851475143


const  dano = 600851475143;
var temp = dano;
var largestPrimeFactor = 0;

var counter = 2;
while (counter * counter <= temp) {
    if (temp % counter == 0) {
        temp = temp / counter;
        largestPrimeFactor = counter;
    } else {
        counter++;
    }
}
if (temp > largestPrimeFactor) { // the remainder is a prime number
    largestPrimeFactor = temp;
}

document.write(largestPrimeFactor+'\n');


/*
 * Solution:
 * Using a prime factorisation method http://www.mathsisfun.com/prime-factorization.html
 *
 *
 * First i set a counter to be 2 which is the first prime number after 1
 * if the number is dividable by counter I write down the product of division in a temp variable and
 * use it to check further
 * if not i increase the counter
 * the loop is running until the counter square is bigger then the number i am checking,
 * since if it is bigger then the product of division, then it is going to become smaller and i need to find the largest one
 * when the loop breaks the prime number either the counter or the number in the temp variable.
 * i am checking whichis bigger and writing it in the result
 *
 *
 *
 *
 * */