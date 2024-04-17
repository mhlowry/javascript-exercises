const reverseString = function(s) {
    let reverseString = '';
    
    for (let i = s.length - 1; i >= 0; i--)
        reverseString = reverseString + s[i];
    
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
