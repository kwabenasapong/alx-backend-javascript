/* Write your code in the main.ts file:

Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
Create two students, and create an array named studentsList containing the two variables
Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
Requirements:

When running, Webpack should return No type errors found.
Every variable should use TypeScript when possible. */
let student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
};
let student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "New York"
};
let studentsList = [student1, student2];
// let table = document.createElement("table");
// let tableBody = document.createElement("tbody");
// studentsList.forEach(function (student) {
//     let row = document.createElement("tr");
//     let cell = document.createElement("td");
//     let cellText = document.createTextNode(student.firstName);
//     cell.appendChild(cellText);
//     row.appendChild(cell);
//     cell = document.createElement("td");
//     cellText = document.createTextNode(student.location);
//     cell.appendChild(cellText);
//     row.appendChild(cell);
//     tableBody.appendChild(row);
// });
// table.appendChild(tableBody);
// document.body.appendChild(table);
// examples to test code above
console.log(student1);
console.log(student2);
console.log(studentsList);
//# sourceMappingURL=main.js.map