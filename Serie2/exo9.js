/* Exercise.
Given an input string, reverse the string word by word, the first word will be the last, and so on.

Notes
A word is defined as a sequence of non-space characters.
The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
Expected results
reverseWords(" the sky is blue") ➞ "blue is sky the"

reverseWords("hello   world!  ") ➞ "world! hello"

reverseWords("a good example") ➞ "example good a" */

function reverseWords(words){
    arr=words.trim().split(" ");
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==""){
            arr.splice(i,1);
            //De not forget with splice the index i+1 becomes i !!!
            i-=1;
        }
    }
    return arr.reverse();
}
console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
console.log(reverseWords("a good example"));

