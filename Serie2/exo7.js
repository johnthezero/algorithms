/* Exercise.
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Notes
If the input tries to divide by 0, return: "Can't divide by 0!"

Expected results
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2 */

function calculator(num1,operator,num2){
    let answer;
   
    switch (operator) {
        case "+" : answer=num1+num2;
                   break;
        case "-" : answer=num1-num2;
                   break;
        case "*" : answer=num1*num2;
                   break;
        case "/" :  if(num2==0){
                        answer="Can't divide by 0!";
                    }else {
                        answer=num1/num2;
                    } 
        default : "Operation not known amigo !"                       
    }
    return answer;
}

console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));