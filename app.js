import { createConnection } from 'mysql';
import express from 'express';
import { DATABASENAME, HOST, PASSWORD, USERNAME } from './config/index.js';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = createConnection({
  host: HOST,
  user: USERNAME,
  password: PASSWORD,
  database: DATABASENAME
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to database:', err);
  } else {
    console.log('Connected to database!');
  }
});

export default app;