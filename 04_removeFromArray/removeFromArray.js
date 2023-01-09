const removeFromArray = function (array, ...args) {
    let newArray = array;

    for (var i = array.length; i >= 0; i--) {
        for (var o = 0; o < args.length; o++) {
            if (array[i] === args[o]) {
                newArray.splice(i, 1);
            }
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
