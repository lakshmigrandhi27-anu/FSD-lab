
function printOutput(text) {
    document.getElementById("output").textContent = text;
}

// a. Largest of three integers
function largestNumber() {
    let a = Number(prompt("Enter first integer:"));
    let b = Number(prompt("Enter second integer:"));
    let c = Number(prompt("Enter third integer:"));

    if (![a, b, c].every(Number.isInteger)) {
        alert("Please enter valid integers.");
        return;
    }

    let result;

    if (a === b && b === c) {
        result = "All numbers are equal.";
    } else if (a === b || b === c || a === c) {
        result = "Two numbers are equal.";
    } else {
        result = "Largest number is " + Math.max(a, b, c);
    }

    alert(result);
    printOutput(result);
}

// b. Display day using switch case
function showDay() {
    let day = Number(prompt("Enter day number (1-7):"));
    let result;

    switch (day) {
        case 1: result = "Sunday"; break;
        case 2: result = "Monday"; break;
        case 3: result = "Tuesday"; break;
        case 4: result = "Wednesday"; break;
        case 5: result = "Thursday"; break;
        case 6: result = "Friday"; break;
        case 7: result = "Saturday"; break;
        default: result = "Invalid day number";
    }

    printOutput(result);
    alert(result);
}

// c. Print 1 to 10 using for, while, do-while
function showLoops() {
    let result = "FOR LOOP:\n";

    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }

    result += "\n\nWHILE LOOP:\n";
    let j = 1;

    while (j <= 10) {
        result += j + " ";
        j++;
    }

    result += "\n\nDO-WHILE LOOP:\n";
    let k = 1;

    do {
        result += k + " ";
        k++;
    } while (k <= 10);

    printOutput(result);
}

// d. Object data using for-in, forEach, for-of
function showObjectLoops() {
    let student = {
        name: "Ravi",
        age: 20,
        department: "IT"
    };

    let result = "FOR-IN LOOP (Object):\n";

    for (let key in student) {
        result += key + ": " + student[key] + "\n";
    }

    let subjects = ["Java", "HTML", "JavaScript"];

    result += "\nFOR-EACH LOOP (Array):\n";

    subjects.forEach(function(subject) {
        result += subject + "\n";
    });

    result += "\nFOR-OF LOOP (Array):\n";

    for (let subject of subjects) {
        result += subject + "\n";
    }

    printOutput(result);
}

// e. Armstrong number check
function checkArmstrong() {
    let num = Number(prompt("Enter a non-negative integer:"));

    if (!Number.isSafeInteger(num) || num < 0) {
        alert("Please enter a valid non-negative integer.");
        return;
    }

    let digits = String(num).split("");
    let sum = 0;

    for (let digit of digits) {
        sum += Number(digit) ** digits.length;
    }

    let result = sum === num
        ? num + " is an Armstrong number."
        : num + " is not an Armstrong number.";

    printOutput(result);
    alert(result);
}

// f. Deposit denomination breakdown
function denomination() {
    let amount = Number(prompt("Enter deposit amount in rupees:"));

    if (!Number.isSafeInteger(amount) || amount < 0) {
        alert("Enter a valid non-negative whole amount.");
        return;
    }

    let notes = [100, 50, 20, 10, 5, 2, 1];
    let remaining = amount;
    let result = "Deposit Amount: Rs. " + amount + "\n\n";

    for (let note of notes) {
        let count = Math.floor(remaining / note);
        remaining = remaining % note;

        result += "Rs. " + note + " : " + count + "\n";
    }

    printOutput(result);
}
