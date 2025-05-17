import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';
// import errorMiddleware from './middleware/error.middleware.js';
// import routes from './api/routes/index.js';

const App = express();

// Middleware
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors());
App.use(helmet());
App.use(morgan('dev'));

// Swagger documentation route
App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
// App.use('/api', routes);

// Health check endpoint
App.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Error handling middleware
// App.use(errorMiddleware);

export default App;