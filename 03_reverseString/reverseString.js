const reverseString = function (text) {
    var reversedString = "";

    for (var i = text.length; i > 0; i--) {
        reversedString += text[i - 1];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
