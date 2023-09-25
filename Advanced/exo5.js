/* Exercise. Reverse Array in place
Create a function that takes an array and reverses it.

Notes
Don't use reverse()
Don't create a new array and push elements to it. */

//

/*
*  a[i] et a[length-i-1] jusqu'à length/2
*
*
*  [0][1][2][3][4][5][6]
*  
*
*/

//Elegant version works with odd and even array length !

function reverseArray(array){
    let temp;

    for(let i=0;i<Math.floor(array.length/2)+array.length%2;i++){
        temp=array[i];
        array.splice(i,1,array[array.length-1-i]);
        array.splice(array.length-i-1,1,temp);
    }
    return array;
}

//test

let arr=["a","b","c","d","e","f","g","h"];   //EVEN
let arr2=[1,2,3,4,5,6,7];                    //ODD
console.log(reverseArray(arr));
console.log(reverseArray(arr2));
