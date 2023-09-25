/* Exercise. Two sums
Write a function that takes as argument an array of numbers numArray and the sum we want to obtain.

Your function should return every pair of numbers from numArray that adds up to the 'sum'

Notes
The result should be an array of arrays.
Any number in the array can be used in multiple pairs (look at the "4" in the exemple below)
Expected results
// For "sum" = 7
[1, 6, 4, 5, 3, 3] ---> [[6,1], [3,4], [3,4]] */
/* 
function twoSum(array,sum){
    let arr=[[]];
    let arrB=[0,0];
    for(let i=0;i<array.length-1;i++){
        arrB[0]=array[i];
        for(let j=i+1;j<array.length-1;j++){
                arrB[1]=array[j];
                if(arrB[0]+arrB[1]==sum){
                    arr.push(arrB);
                }
        }
    }
    for(item of arr){
        console.log(item +" Test");
    }
    return arr;
}
arrey=[1, 6, 4, 5, 3, 3];
console.log(twoSum(arrey,7)); */

function twoSums(array,sum){
    const smallArray=[255,255];
    const finalArray=[];
    for(let i=0;i<array.length-1;i++){
        smallArray[0]=array[i];
        for(let j=i+1;j<array.length;j++){
            smallArray[1]=array[j];
            if((smallArray[0]+smallArray[1])==sum){
                //EVIL PART BELOW -->
                finalArray.push([smallArray[0],smallArray[1]]);
            }
        }
    }
    return finalArray;
}


const arrayTest= [1, 6, 4, 5, 3, 3];
console.log(twoSums(arrayTest,7));


