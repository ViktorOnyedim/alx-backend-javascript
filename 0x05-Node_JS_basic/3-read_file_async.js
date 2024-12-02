const fs = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.split('\n').filter((row) => row.trim() !== '');
      if (rows.length < 2) {
        resolve();
        return;
      }

      const header = rows[0].split(',');
      const studentsData = rows.slice(1);
      const fields = {};

      studentsData.forEach((row) => {
        const student = row.split(',');
        if (student.length === header.length) {
          const field = student[student.length - 1].trim();
          const firstName = student[0].trim();

          if (field && firstName) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstName);
          }
        }
      });

      console.log(`Number of students: ${studentsData.length}`);
      for (const [field, names] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
        );
      }
      resolve();
    });const countStudents = require('./3-read_file_async');

    countStudents("database.csv")
        .then(() => {
            console.log("Done!");
        })
            .catch((error) => {
            console.log(error);
        });
    console.log("After!");
    
  });
};

module.exports = countStudents;
