/* Exercise. Reverse word.
Create a function that takes a string parameter and return another string with all the words inversed.

Notes
Attention !

The order of the words doesn't change, just the letters of each word
Expected results
"This is a string of words" ----> "siht si a gnirts fo sdrow" */

function reverseWord(word){
    word=word.trim();
    let reversed="";
    let arr=[];
    let tempStr="";
    for(let i=0;i<word.length;i++){
        if(word.charAt(i)!=" "){
            let end=false;

        }else{
            tempStr+=word.charAt(i)
        }
    }

    return reversed;
}

//loop1 

// if ==space --> copy, else // op2

//op2 
// to array -> array.reverse  , tempStr=arr.join, , reversed=reverse.concat(tempSStr);  