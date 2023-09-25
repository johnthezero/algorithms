/* Exercise. Reverse word.
Create a function that takes a string parameter and return another string with all the words inversed.

Notes
Attention !

The order of the words doesn't change, just the letters of each word
Expected results
"This is a string of words" ----> "siht si a gnirts fo sdrow" */

function reverseWord(sentence){
    let words=sentence.split(" ");
    let word=[];
    let finalSentence="";
    for(let i=0;i<words.length;i++){
        word=words[i].split("");
        word=word.toReversed();
        finalSentence+=word.join("")+" ";
    }
    return finalSentence;
}

console.log(reverseWord("This is a string of words"));
