import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'remind-me-db',
    location: 'default',
  },
  ()    => { /* success callback */ },
  error => { /* error callback   */ },
);

// db.transaction((tx) => {
  // tx.executeSql('CREATE TABLE IF NOT EXISTS reminders ( id INTEGER PRIMARY KEY NOT NULL,        text TEXT)', [], (tx, results) => {
  //     console.log("Query completed");

  //   });
// });

// db.transaction((tx) => {
//   tx.executeSql('SELECT * FROM Employees a, Departments b WHERE a.department = b.department_id', [], (tx, results) => {
//       console.log("Query completed");

//       // Get rows with Web SQL Database spec compliance.

//       var len = results.rows.length;
//       for (let i = 0; i < len; i++) {
//         let row = results.rows.item(i);
//         console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`);
//       }

//       // Alternatively, you can use the non-standard raw method.

//       /*
//         let rows = results.rows.raw(); // shallow copy of rows Array

//         rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
//       */
//     });
// });

// db.transaction((tx) => {
//   tx.executeSql(
//     'CREATE TABLE IF NOT EXISTS reminders ( id INTEGER PRIMARY KEY NOT NULL,        text TEXT);',
//     [],
//     (tx, results) => { /* success callback */ },
//     error => { /* error callback */ }
//   );
// });


class RemindersModel {
  constructor({ log }) { Object.assign(this, { log }); }

  create(reminder) {


    // console.log('test');
    // return fetch(API_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept':       'application/json',
    //   },
    //   body: JSON.stringify({
    //     reminder: text,
    //   }),
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log('Success:', data);
    //   return data;
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    //   throw error;
    // });
  }
}

export default RemindersModel;