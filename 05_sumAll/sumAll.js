const sumAll = function() {
    if (arguments.length != 2) {
        console.error("Function should have 2 arguments.");
        return "ERROR";
    }
    else if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])){
        console.error("Both arguments must be an integer");
        return "ERROR";
    }
    else if (arguments[0] < 0 || arguments[1] < 0) {
        console.error("Both arguments must be greater than 0");
        return "ERROR";
    }

    let sum = 0;
    let start = 0;
    
    if (arguments[0] < arguments[1]){
        start = arguments[0];
        end = arguments[1];
    }
    else {
        start = arguments[1];
        end = arguments[0];
    }

    for(let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
