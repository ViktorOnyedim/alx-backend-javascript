const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.split('\n').filter((row) => row.trim() !== '');
      if (rows.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const header = rows[0].split(',');
      const students = rows.slice(1).map((row) => row.split(','));
      const fields = {};

      for (const student of students) {
        if (student.length === header.length) {
          const field = student[header.length - 1];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]);
        }
      }

      const totalStudents = Object.values(fields).reduce((sum, names) => sum + names.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(data);
    });
  });
};

module.exports = countStudents;
