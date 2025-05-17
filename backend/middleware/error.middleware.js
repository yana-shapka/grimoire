const logger = require('../utils/logger');

// Error handling middleware
const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  // Log error
  logger.error(`${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  
  // Send response
  res.status(statusCode).json({
    success: false,
    error: err.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorMiddleware;