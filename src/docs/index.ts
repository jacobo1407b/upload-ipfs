import swaggerJsDoc from 'swagger-jsdoc';
const data = require ('./swagger.json')


export const swaggerDocs = swaggerJsDoc(data)