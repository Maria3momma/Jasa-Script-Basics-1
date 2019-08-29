//Given a string, return true if it ends in "ly".
//endsLy("oddly") → true
//endsLy("y") → false
//endsLy("oddy") → false


function endsly(string){
    if(string.substring(string.length-2).match("ly")){
        console.log("true");
    }
    else {
        console.log("false")
}

endsly("Happy");
endsly("truly");
}
//for(var i=0;<=100;i++){
//              evenOrOdd(i);
//}