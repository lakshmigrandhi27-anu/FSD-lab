
function showOutput(text) {
    document.getElementById("output").textContent = text;
}

// a. DOCUMENT OBJECT
function documentExample() {
    let title = document.title;
    document.title = "Document Object Example";

    showOutput(
        "Document Object\n" +
        "Page Title: " + title + "\n" +
        "Method: getElementById()"
    );
}

// b. WINDOW OBJECT
function windowExample() {
    showOutput(
        "Window Object\n" +
        "Window Width: " + window.innerWidth + "\n" +
        "Window Height: " + window.innerHeight + "\n" +
        "Method: alert()"
    );

    // Window method example
    window.alert("This is the Window object!");
}

// c. ARRAY OBJECT
function arrayExample() {
    let fruits = ["Apple", "Mango", "Orange"];

    let result = "Array Object\n";
    result += "Original Array: " + fruits + "\n";
    result += "Length: " + fruits.length + "\n";

    fruits.push("Banana");
    result += "After push(): " + fruits + "\n";

    fruits.pop();
    result += "After pop(): " + fruits;

    showOutput(result);
}

// d. MATH OBJECT
function mathExample() {
    let number = 25;

    showOutput(
        "Math Object\n" +
        "Number: " + number + "\n" +
        "Square Root: " + Math.sqrt(number) + "\n" +
        "Power: " + Math.pow(2, 3) + "\n" +
        "Round: " + Math.round(4.6) + "\n" +
        "PI: " + Math.PI
    );
}

// e. STRING OBJECT
function stringExample() {
    let str = "JavaScript";

    showOutput(
        "String Object\n" +
        "String: " + str + "\n" +
        "Length: " + str.length + "\n" +
        "Uppercase: " + str.toUpperCase() + "\n" +
        "Lowercase: " + str.toLowerCase() + "\n" +
        "Character at index 0: " + str.charAt(0) + "\n" +
        "Includes Java: " + str.includes("Java")
    );
}

// f. REGULAR EXPRESSION (REGEX) OBJECT
function regexExample() {
    let pattern = /^[A-Z][a-z]+$/;
    let name = "Ravi";

    showOutput(
        "Regular Expression Object\n" +
        "Pattern: /^[A-Z][a-z]+$/\n" +
        "Name: " + name + "\n" +
        "Test Result: " + pattern.test(name)
    );
}

// g. DATE OBJECT
function dateExample() {
    let today = new Date();

    showOutput(
        "Date Object\n" +
        "Current Date and Time: " + today + "\n" +
        "Day: " + today.getDate() + "\n" +
        "Month: " + (today.getMonth() + 1) + "\n" +
        "Year: " + today.getFullYear()
    );
}

// h. USER-DEFINED OBJECT
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Accessor: getter
    get studentName() {
        return this.name;
    }

    // Accessor: setter
    set studentName(newName) {
        this.name = newName;
    }

    // User-defined method
    display() {
        return "Student Name: " + this.name +
               "\nStudent Age: " + this.age;
    }
}

function userObjectExample() {
    let s1 = new Student("Anu", 20);

    // Accessor example
    s1.studentName = "Annapurna";

    showOutput(
        "User-defined Object\n" +
        s1.display() + "\n" +
        "Getter Result: " + s1.studentName
    );
}
