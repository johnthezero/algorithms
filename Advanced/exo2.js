/* Exercise isPalindrome
A palindrome is any word or phrase that spells the same way both backward and forward.

For example : race car is a palindrome. (don't take spaces, periods, dots, etc in consideration)

Other examples : Madam, I'm Adam, radar, kayak, etc.

You should create a function isPalindrome that takes a parameter text and returns a boolean indicating if the provided text is a palindrome or not.

Notes
You should be able to to ignore all special characters, spaces, dots, periods, etc. and be case insensitive
Expected results
isPalindrome("kayak") ---> true
isPalindrome("race car") ---> true
isPalindrome("hello world") ---> false
isPalindrome("Madam, I'm Adam") ---> true */

//1 case sensitive
/* //2
function isPalindrome(word){
    let arr=word.toLowerCase().split('');
    const finalArray=[];
    for(let i=0;i<arr.length;i++){
        let charCode=arr[i].charCodeAt(0);
        if(charCode>=97 && charCode<=122){
            finalArray.push(arr[i]);
        }
    }
    arr=finalArray.reverse();

    let isPalindrome=(word.length!=0);
    for(let i=0;i<arr.length && isPalindrome;i++){
        isPalindrome=arr[i]==finalArray[i];
    }
    console.log(arr);
    console.log(finalArray);
    return isPalindrome;
} */


function isPalindrome(word){
    //Get rid of spaces
    let str="";
    let strReversed="";
    let word2=word.toLowerCase();
    for(let i=0;i<word2.length;i++){
        let charCode=word2.charCodeAt(i);
        if(charCode>=97 && charCode<=122){
            str+=word2.charAt(i);
            strReversed=word2.charAt(i).concat(strReversed);
        }
    }
    return strReversed==str;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("hello world"));
console.log(isPalindrome("Madam, I'm Adam"));