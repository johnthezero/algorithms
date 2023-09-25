/* Exercise.
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Notes
Bonus : Try to solve this challenge without using strings!
Expected results
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1 */

function num_of_digits(number){
    lessThanOne=false;
    let numDigits=1;
    while(!lessThanOne){
        if(number/10<1){
            lessThanOne=true;
        }else {
            number/=10;
            numDigits++;
        }
    }
    return numDigits;
}


console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));
