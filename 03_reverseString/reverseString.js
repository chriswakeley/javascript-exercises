const reverseString = function(inputString) {
    let reversedString = "";
    for(const character of inputString){
        reversedString = character + reversedString;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
