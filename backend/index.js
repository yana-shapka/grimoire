import { config } from 'dotenv';
import App from './app.js';

// Initialize dotenv
config();

const PORT = process.env.PORT || 5000;

// Start the server
const server = App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test the API at http://localhost:${PORT}/`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});