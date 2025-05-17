/**
 * Wraps async controller functions to catch errors and pass them to the error middleware
 * Eliminates the need for try/catch blocks in controllers
 */
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  
  export default asyncHandler;