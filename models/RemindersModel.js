import * as SQLite from 'expo-sqlite';

// import SQLite from 'react-native-sqlite-storage';

// const db = SQLite.openDatabase({name: 'my.db', location: 'default'},
//     ()    => { /* success callback */ },
//   error => { /* error callback   */ },
// );
// const db = SQLite.openDatabase(
//   {
//     name: 'remind-me-db',
//     location: 'default',
//   },
//   ()    => { /* success callback */ },
//   error => { /* error callback   */ },
// );

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
  
  init_db() {
    console.log(this.log)
    this.log.debug('Connecting to database');
    this.db = SQLite.openDatabase('remind-me-db.sqlite');
    this.db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS reminders (
            id INTEGER PRIMARY KEY NOT NULL,
            when     INT,
            nag      BOOL,
            reminder TEXT
        );`
      );
    });
  }

  create({reminder, when, nag}) {
      this.log.debug(`Creating reminder: ${reminder}`);
      this.db.transaction((tx) => {
        // when is free text like "tomorrow" and we need to compute Unix time from that
        // nag is a boolean
        // reminder is the text of the reminder
        when = chrono.parseDate(when);
        this.log.debug(`Parsed date: ${when}`);


        

        // tx.executeSql(
        //   `INSERT INTO reminders (when, nag, reminder) VALUES (?, ?, ?);`,
        //   [reminder]
        // );
      });
  }
}

export default RemindersModel;