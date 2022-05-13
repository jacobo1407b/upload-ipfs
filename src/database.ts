import {connect} from 'mongoose';

connect(process.env.DATABASE!).then(()=>{
    console.log('Database is connect')
}).catch(err=>{
    throw err
})