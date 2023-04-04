const repeatString = function(inputString, numRepeats) {
    if(numRepeats < 0){
        return 'ERROR';
    }
    let repeatedString = "";
    for (let i=0; i<numRepeats; i++){
        repeatedString += inputString;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
