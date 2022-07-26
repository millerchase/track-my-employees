const db = require('./config/connection');
const employeeTracker = require('./src/employeeTracker');

db.connect(err => {
  if (err) {
    console.log('Error connecting to Database');
    return;
  }
  console.log('Connection established');
  employeeTracker();
});
