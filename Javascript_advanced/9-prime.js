const {performance} = require('perf_hooks');

function countPrimeNumbers() {

    let count = 0;
    let primeNumber;

    for(let i = 2; i <= 100; i++) {
        primeNumber = true;
        for(let diviseur = 2; diviseur < i; diviseur++) {
            if(i % diviseur === 0) { // si cette condition est valider alors le nombre n'est pas premier
                primeNumber = false;
                break;
            };
        };
        if(primeNumber) {
            count += 1;
        }
    }
    return count;
}

console.log(countPrimeNumbers());

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();

const elapsedTime = t1 - t0;
console.log(`Execution time of printing countPrimeNumbers was ${elapsedTime} milliseconds.`);


/*
function countPrimeNumbers() {

    let count = 0;
    let primeNumber = []

    for(let i = 2; i <= 100; i++) {
        count = 0;
        for(let diviseur = 1; diviseur < 100; diviseur++) {
            if(Number.isInteger(i / diviseur)) {
                count++;
            };
        };
        if(count === 2) {
            primeNumber.push(i);
        }
    }
    return primeNumber;
}
*/