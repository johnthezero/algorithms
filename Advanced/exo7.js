/* Exercise. Fibonacci
Fibonacci sequence starts with 1 and 1 and the next numbers are always the sum of the last two numbers. So... Here is the sequence :

1 1 2 3 5 8 13 21 34 ...

Write a function that takes a num number and returns an array with the num first elements of the Fibonacci sequence.

Notes
Recursion would be the best way to solve it but there is another simple way.
Expected results
fibonacci(4) ----> [1, 1, 2, 3]
fibonacci(9) ----> [1, 1, 2, 3, 5, 8, 13, 21, 34]
fibonacci(6) ----> [1, 1, 2, 3, 5, 8] */


//méthode dégueulasse
function fibonacci(num){
    const array=[0,1];
    for(let i=0;i<num;i++){
        array.push(array[i]+array[i+1]);
    }
    array.shift();
    array.pop();
    return array;
}
console.log(fibonacci(4));
console.log(fibonacci(9));
console.log(fibonacci(6));
