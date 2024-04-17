const repeatString = function(s, n) {
    let newString = ""

    if (n < 0) return "ERROR";

    for (let i = 0; i < n; i++)
        newString = newString + s;

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
