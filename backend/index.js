import app from './app.js';
import http from 'http';
import logger from './utils/logger.js';

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
