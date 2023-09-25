/* Create a function that converts Celsius to Fahrenheit and vice versa.

Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
Look on Google how to convert F to C and vice-versa
Expected results
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error" */
/* F = C*9/5 +32 */
   
/*    (F-32)*5/9 = C  */

function convert(temp){
    let message="Error";
    let temperature=temp.match(/[0-9]/g).join('');
    let unit=temp[temp.length-1].toLowerCase();
    if(!isNaN(temperature) && temperature!=null && (unit=="f" || unit=="c") ){ 
        if(unit=="f"){
            message= (temperature-32)*5/9+" °C";
        }else {
            temperature= (temperature*9/5)+32+" °F";
            message=temperature;
        }
    }
    console.log(message);
}

convert("32°F");
convert("44°C");
convert("44");