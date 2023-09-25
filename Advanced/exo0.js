/* Create a functions that takes a num argument. You should then console.log all numbers from 1 to num.

But here’s the catch : multiple of 3 should print “Fizz” and multiples of 5 shoudl print “Buzz”. Lastly if the number is multiple of 3 and 5, it should print FizzBuzz

Notes
Your code should be modular. You must be able to pass any numbers as n and the code should still work.
Expected results
In the console, if the num is 20, for example :

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz */


function fizz(num){
    for(let i=1;i<=num;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }else if (i%3==0){
            console.log("Fizz");
        }else if(i%5==0) {
            console.log("Buzz");
        }else {
            console.log(i)
        }
    }
}
fizz(20);
