// Code your solution in this file!
// Assign functions to a variable.
const returnFirstTwoDrivers = function(anArray) {
    return anArray.slice(0, 2);
}

const returnLastTwoDrivers = function(anotherArray) {
    return anotherArray.slice(2, 4)
}

// Store functions in a data structure.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Write functions that return other functions.
function createFareMultiplier(int) {
    return function (otherInt) {
        return int * otherInt;
    };
};

// Pass a function to another function.
const fareDoubler = function(rate) {
    return rate * 2;
};

const fareTripler = function(rate) {
    return rate * 3;
}
// Call a function returned by another function.
const selectDifferentDrivers = function(driverArray, oneFunction) {
    return oneFunction(driverArray);
}
