const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Hridhayam',
  password: 'welcome@123',
  port: 5432,
})
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected with postgres!");
// });

const execute = async (query) => {
  try {
      await client.connect();     // gets connection
      await client.query(query);  // sends queries
      return true;
  } catch (error) {
      console.error(error.stack);
      return false;
  } finally {
      await client.end();         // closes connection
  }
};

const text = `
  CREATE TABLE IF NOT EXISTS "employee" (
    "id" SERIAL,
    "emp_name" VARCHAR(100) NOT NULL,
    "designation" VARCHAR(15) NOT NULL,
    PRIMARY KEY ("id")
  );`;

execute(text).then(result => {
  if (result) {
      console.log('Table created');
  }
});

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const port = 3020;

app.get('/', (req, res) => {
  res.send('Node With postgres');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

