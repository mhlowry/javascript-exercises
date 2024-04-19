const removeFromArray = function() {

    if (arguments.length < 2){
        console.error("Not enough arguments");
        return;
    }

    let arr = arguments[0];

    for(let i = 1; i < arguments.length; i++){

        while(arr.indexOf(arguments[i]) != -1)
            arr.splice(arr.indexOf(arguments[i]), 1);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
