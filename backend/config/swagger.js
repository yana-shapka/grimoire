import swaggerJsdoc from 'swagger-jsdoc';

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Card List API',
      version: '1.0.0',
      description: 'API for managing card lists and user settings',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Your Name',
        url: 'https://yourwebsite.com',
      },
    },
    servers: [
      {
        url: '/api',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  // Updated path to API docs with new structure
  apis: ['./api/routes/*.js', './models/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;