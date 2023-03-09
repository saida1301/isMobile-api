import { createConnection } from 'mysql';
import { DATABASENAME, HOST, PASSWORD, USERNAME } from '../isMobile-api/config/index';


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
