const sumAll = function (num1, num2) {
    if (!Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 < 0 ||
        num2 < 0) return "ERROR";

    var highestNum;
    var lowestNum;
    
    if (num1 > num2) {
        highestNum = num1;
        lowestNum = num2;
    }
    else {
        highestNum = num2;
        lowestNum = num1;
    }

    var sum = 0;

    for (var i = lowestNum; i <= highestNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
