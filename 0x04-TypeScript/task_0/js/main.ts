/*
Write your code in the main.ts file:

Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
Create two students, and create an array named studentsList containing the two variables
Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
Requirements:

When running, Webpack should return No type errors found.
Every variable should use TypeScript when possible.
*/
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: 'Koby',
  lastName: 'Sap',
  age: 20,
  location: 'Tema',
};

let student2: Student = {
  firstName: 'Alice',
  lastName: 'Tekpey',
  age: 19,
  location: 'Accra',
};

let studentList: Student[];

studentList = [student1, student2];