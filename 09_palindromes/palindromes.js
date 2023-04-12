const palindromes = function (input) {
    return input.toLowerCase().split(/\W+/).join("").split('').reverse().join("") === input.toLowerCase().split(/\W+/).join("");
};

// Do not edit below this line
module.exports = palindromes;
