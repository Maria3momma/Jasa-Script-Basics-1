// Given a string, return the string made of its first two chars, so the String
// "Hello" yields "He". If the string is shorter than length 2, return whatever
// there is, so "X" yields "X", and the empty string "" yields the empty string
// "". Note that str.length() returns the length of a string.
// firstTwo("Hello") → "He"
// firstTwo("abcdefg") → "ab"
// firstTwo("ab") → "ab"
function firstTwo(string){
    if(string.length % 2 === 0){
       var firstTwo = string.substring(0,string.length -2); 
       console.log(firstTwo);
    }
        
}

firstTwo("Fellowship")
