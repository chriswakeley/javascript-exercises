const fibonacci = function(fibN) {
    if(fibN < 1){
        return "OOPS";
    }
    if(fibN < 3){
        return 1;
    }
    let fibA, fibB;
    fibA = fibB = 1;
    for(let i = 2;i < fibN; i++){
        fibA = fibA + fibB;
        fibB = fibA - fibB;
    }
    return fibA;
};

// Do not edit below this line
module.exports = fibonacci;
