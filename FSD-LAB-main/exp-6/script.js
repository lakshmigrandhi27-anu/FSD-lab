
function externalJS() {
    alert("This is External JavaScript!");
}

// Input and output methods
function inputOutput() {
    let name = prompt("Enter your name:");

    if (name === null) {
        return;
    }

    // Type conversion: String to Number
    let age = Number(prompt("Enter your age:"));

    if (age === 0 && name.trim() === "") {
        alert("Please enter valid details.");
        return;
    }

    if (name.trim() === "" || !Number.isFinite(age) ||
        age < 0 || !Number.isInteger(age)) {
        alert("Please enter a valid name and age.");
        return;
    }

    // Output methods
    console.log("Name: " + name);
    console.log("Age: " + age);

    alert("Name: " + name + "\nAge: " + age);

    document.getElementById("message").textContent =
        "Welcome, " + name + "!";

    // Type conversion example
    let ageText = String(age);
    console.log("Age as String: " + ageText);
}

// Display name and age in a table
function checkEligibility() {
    let name = document.getElementById("name").value.trim();

    // Input values are strings, so convert age to Number
    let ageInput = document.getElementById("age").value;
    let age = Number(ageInput);

    if (name === "" || ageInput === "" ||
        !Number.isFinite(age) || age < 0 ||
        !Number.isInteger(age)) {
        alert("Please enter a valid name and age.");
        return;
    }

    let result;

    if (age >= 18) {
        result = "Eligible to Vote";
    } else {
        result = "Not Eligible to Vote";
    }

    // Create a table row
    let table = document.getElementById("resultTable");
    let row = table.insertRow();

    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = age;
    row.insertCell(2).textContent = result;

    document.getElementById("message").textContent =
        "Voter eligibility checked successfully.";
}
