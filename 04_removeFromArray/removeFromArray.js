const removeFromArray = function(inputArray, ...wordsToRemove) {
    return inputArray.filter(inputElement => !wordsToRemove.includes(inputElement));
};

// Do not edit below this line
module.exports = removeFromArray;
