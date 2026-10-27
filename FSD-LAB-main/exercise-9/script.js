
function getInput() {
    return document.getElementById("inputValue").value.trim();
}

function showResult(text) {
    document.getElementById("output").textContent = text;
}

// i. Factorial function
function factorial(n) {
    let result = 1n;

    for (let i = 1n; i <= BigInt(n); i++) {
        result *= i;
    }

    return result.toString();
}

function showFactorial() {
    let n = Number(getInput());

    if (!Number.isInteger(n) || n < 0 || n > 100) {
        showResult("Enter an integer from 0 to 100.");
        return;
    }

    showResult("Factorial of " + n + " = " + factorial(n));
}

// ii. Fibonacci series function
function fibonacci(n) {
    let a = 0, b = 1;
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return result.join(" ");
}

function showFibonacci() {
    let n = Number(getInput());

    if (!Number.isInteger(n) || n < 1 || n > 100) {
        showResult("Enter the number of terms from 1 to 100.");
        return;
    }

    showResult("Fibonacci Series:\n" + fibonacci(n));
}

// iii. Prime numbers function
function primes(n) {
    let result = [];

    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result.push(i);
        }
    }

    return result.join(" ");
}

function showPrimes() {
    let n = Number(getInput());

    if (!Number.isInteger(n) || n < 2 || n > 10000) {
        showResult("Enter an integer from 2 to 10000.");
        return;
    }

    showResult("Prime numbers up to " + n + ":\n" + primes(n));
}

// iv. Palindrome check function
function isPalindrome(value) {
    let text = value.toLowerCase();
    return text === text.split("").reverse().join("");
}

function showPalindrome() {
    let value = getInput();

    if (value === "") {
        showResult("Please enter a number or text.");
        return;
    }

    if (isPalindrome(value)) {
        showResult(value + " is a Palindrome.");
    } else {
        showResult(value + " is not a Palindrome.");
    }
}
