//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
//1,4,9,16,25,36,49,64,81,100

//The formula for calculating the sum of the n natural numbers is Sn = n(n-1)/2
//n = 100
var squareOfSum = (100*(100-1))/2;
//make it into a square
squareOfSum *= squareOfSum


//The formula for calculating the sum of squares n natural numbers is S*Sn = 1/6*n(n+1)(2n+1)
var sumOfSquares = (100*(100-1)*(2*100+1))/6;



document.write(squareOfSum - sumOfSquares);




