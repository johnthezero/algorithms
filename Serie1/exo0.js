/* Exercise.
Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

Notes
Don't forget to return the result.

Expected results
makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true */

function makesTen(a,b){

    return ((a+b)==10 || a==10 || b==10);
}
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));


 


