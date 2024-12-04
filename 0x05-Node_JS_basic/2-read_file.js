const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const rows = data.trim().split('\n');
    const header = rows[0].split(',');
    // const students = rows.slice(1);

    const fieldIndex = header.indexOf('field');
    const firstNameIndex = header.indexOf('firstname');

    if (fieldIndex === -1 || firstNameIndex === -1) {
      throw new Error('Invalid CSV format');
    }
    const fieldCounts = {};
    for (let i = 1; i < rows.length; i += 1) {
      const columns = rows[i].split(',');
      if (columns.length === header.length) {
        const field = columns[fieldIndex].trim();
        const firstName = columns[firstNameIndex].trim();

        if (!fieldCounts[field]) {
          fieldCounts[field] = {
            count: 0,
            students: [],
          };
        }

        fieldCounts[field].count += 1;
        fieldCounts[field].students.push(firstName);
        // console.log(`Columns: ${columns}, field: ${field}, firstName: ${firstName}`);
      }
    }
    const totalStudents = Object.values(fieldCounts).reduce(
      (acc, field) => acc + field.count,
      0,
    );
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, data] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
