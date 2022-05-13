import express from 'express';
import multer from 'multer';
import {config} from 'dotenv';
import cors from 'cors';


import routs from 'routes'
import swaggerUI from 'swagger-ui-express';
const data = require ('./docs/swagger.json')
//import swagger from 'docs/swagger';

config();

const app = express();
const port = parseInt(process.env.PORT!) || 3000
require('./database');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(multer().single('image'))


app.use('/api',routs);
app.use("/docs", swaggerUI.serve,swaggerUI.setup(data))
app.use('/metadata',(req,res)=>{
    res.json(data)
})
//app.use('/docs', swagger)

app.listen(port,()=>{
    console.log('Server on port: '+port)
})