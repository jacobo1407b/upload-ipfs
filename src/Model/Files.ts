import { Schema, model } from 'mongoose';
type IFile = {
    typeFile: string,
    cid: string,
    icon: string,
    description: string,
    title: string,
    uid:string,
    fecha:any,
    typef:string,
    size:number
}

const fileSchema = new Schema<IFile>({
    typeFile: {
        type: String,
        required: true
    },
    cid: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    uid:{
        type: String,
        required: true 
    },
    fecha:{
        type: Date,
        default:Date.now()
    },
    typef:{
        type: String,
        required: true 
    },
    size: {
        type: Number,
        required:true
    }
});

export default model('Files', fileSchema);