
//Find the largest palindrome made from the product of two 3-digit numbers.
let largest = 999*999;
let palindrome = 9009;
let reversedNumber;
let finished = false;


// method for reversing a string
String.prototype.reverseStr = function(){
    return this.split('').reverse().join('')
};

// method for getting a length of a number
Math.nLength = function(n) {
    return (Math.log(Math.abs(n)+1) * 0.43429448190325176 | 0) + 1;
}

for(var number = largest; number >= 9009; number--){
    reversedNumber = parseInt ( number.toString().reverseStr() );
    if(i === reversedNumber ){
        for(var divider = 999; divider >= 100; divider--){

            if( number%divider === 0 && Math.nLength(number/divider) === 3){
                palindrome = number;
                finished = true;
                break;
            }
            if ((number / divider) > 999 || number*number < divider) {
                break;
            }
        }
        if(finished){
            document.write(palindrome+'\n');
            document.write(divider+'\n');
            document.write(number/divider+'\n');
            break
        }
    }
}

/*
* Solution:
* find the largest product from 3 digit numbers
* go down from there: decrementing and checking if it is a palindrome
*
* when it is a palindrome check for two  3 digit dividers
*
*
*
*
* */





