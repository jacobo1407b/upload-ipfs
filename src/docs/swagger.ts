import express from 'express';
import swaggerUI from 'swagger-ui-express';
const data = require ('./swagger.json')
//import {swaggerDocs} from 'docs';

const app = express();

app.use("/", swaggerUI.serve,swaggerUI.setup(data))

export default app;