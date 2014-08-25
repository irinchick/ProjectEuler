//Count the sum every third term of Fibonacci sequence
var first = 1;
var second = 1;
var current = 0;
var countModThree = 2;
var sum = 0;
while ( current < 4000000 ){
	countModThree ++
	current = first + second;
	if( countModThree == 3){
		countModThree = 0
		sum += current;
	}
	first = second;
	second = current;
}
console.log( sum );