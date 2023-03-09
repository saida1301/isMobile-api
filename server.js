import { createServer } from 'http';
 import { PORT } from './config/index.js';
import app from './app.js';


const server = createServer(app);


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 