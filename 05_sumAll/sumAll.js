const sumAll = function(inputBound1, inputBound2) {
    if(Math.min(inputBound1, inputBound2) < 0 || 
        typeof(inputBound1) !== "number" || 
        typeof(inputBound2) !== "number" ){
        return 'ERROR';
    }
    let sum = 0;
    for(let i = Math.min(inputBound1, inputBound2); i<Math.max(inputBound1, inputBound2) + 1; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
