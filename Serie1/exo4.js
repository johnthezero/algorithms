/* Exercise.
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Expected results
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement" */
//Does work with latin alphabet only !
    // 97 --> 122 pour les min
    // 65 --> 90 pour les maj
function detectWord(word){
    let secret="";
    let char="";
    for(let i=0;i<word.length;i++){
        char=word.charAt(i);
        if(char.charCodeAt(0)<=122 && char.charCodeAt(0)>=97){
           secret=secret.concat(char); 
        }
    }
    return secret;
}
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

//Version 2

let arr=Array.of("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
function detectWordB(word){
    let secret="";
    for(let i=0;i<word.length;i++){
        for(let j=0;j<arr.length;j++){
            if(word.charAt(i)==arr[j]){
                secret=secret.concat(word.charAt(i));
            }
        }
    }
    return secret;
}

console.log(detectWordB("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWordB("UcUNFYGaFYFYGtNUH"));
console.log(detectWordB("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

//Version 3


    
