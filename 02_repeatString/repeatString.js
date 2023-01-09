const repeatString = function(message, count) {
    let string = "";

    if (count < 0) return "ERROR";
    
    for (let index = 0; index < count; index++) {
        string += message;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
