function divideBy(firstNumber){
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
};

function addBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber + firstNumber;
    };
};

const addBy100 = addBy(100); // 100 is the secondNumber
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10); // 10 is the secondNumber
const divideBy100 = divideBy(100);

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));