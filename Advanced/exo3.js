/* Exercise. Caesar Cipher
Caesar Cipher is a way of "encrypting" a text that, supposably, Julius Caesar used in his communication.

We switch every letter with, for example, two letters before in the alphabet.

The Caesar cipher function will take two parameters str and num; str represents the text we want to cipher and num de amount of letters you want to go forward or backward (using negative numbers)

Notes
Make it case incensitive
You should be able to loop back or forward into de the alphabet (if you have to go 3 from z, it would be c)
Expected results
caesarCipher("zoo keeper", 2) ----> "bqq mggrgt"

caesarCipher("bqq mggrgt", -2) ----> "zoo keeper"

caesarCipher("My name is Henrique", 3) ----> "pb qdph lv khqultxh " */

function caesarCipher(word,key){
    let lowLimit,highLimit;
    let charCode,charIncrement;
    let encrypted="";
    key%=26;
    for(let i=0;i<word.length;i++){
        charCode=word[i].charCodeAt(0);
        if((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)){
            if(charCode<=90){
                lowLimit=65;
                highLimit=90;
            }else {
                lowLimit=97;
                highLimit=122;
            }
            charIncrement=charCode+key;
            if(charIncrement<lowLimit){
                encrypted+=String.fromCharCode(highLimit-(lowLimit-charIncrement-1));
            }else if(charIncrement>highLimit){
                encrypted+=String.fromCharCode(lowLimit+(charIncrement-highLimit-1));
            }else {
                encrypted+=String.fromCharCode(charIncrement);
            }
        }else {
            encrypted+=word[i];
        }
    }
    return encrypted;
}
console.log(caesarCipher("zoo keeper", 2));
console.log(caesarCipher("bqq mggrgt", -2));
console.log(caesarCipher("My name is Henrique", 3));