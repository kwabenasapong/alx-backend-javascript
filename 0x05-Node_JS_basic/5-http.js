/* In a file named 5-http.js, create a small HTTP server using the http module:

It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
It should return plain text
When the URL path is /, it should display Hello Holberton School! in the page body
When the URL path is /students, it should display This is the list of our students
followed by the same content as the file 3-read_file_async.js (with and without the database)
- the name of the database must be passed as argument of the file
CSV file can contain empty lines (at the end) - and they are not a valid student! */

const http = require('http');
//const countStudents = require('./3-read_file_async');

/* Using the database database.csv (provided in project description),
create a function countStudents in the file 3-read_file_async.js

Create a function named countStudents. It should accept a path
in argument (same as in 2-read_file.js)
The script should attempt to read the database file asynchronously
The function should return a Promise
If the database is not available, it should throw an error with
the text Cannot load the database
If the database is available, it should log the following message to
the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list
with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student! */

const fs = require('fs');

const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    const data = await countStudents(process.argv[2]);
    res.end(`${data}`);
  }
});

app.listen(1245);

module.exports = app;
