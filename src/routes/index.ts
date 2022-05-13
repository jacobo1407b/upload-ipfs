import express from 'express';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

import Files from 'Model/Files';
import loadData ,{publish}from 'storage';
import { getIcon } from 'utils';
const router = express.Router();


router.get('/getfiles', async (req, res) => {
    try {
        const tfile = req.query.file;
        var files:any;
        if(tfile){
            files = await Files.find({typeFile:tfile}).sort([[req.query.sort,-1]])
        }else{
            files = await Files.find().sort([[req.query.sort,-1]])
        }
        res.status(200).json({error:false,data:files});
    } catch (error) {
        console.log(error)
        res.status(500).json({error:true,data:null,msg:error})
    }

});

router.get('/get/types', async (req, res) => {
    const f = await Files.aggregate([
        {
            $group: {
                _id: '$typeFile',
                count: { $sum: 1 }
            }
        }
    ])
    res.status(200).json({error:false,data:f,msg:'success'})
})
router.post('/loadfile', async (req, res) => {
    try {
        var h = uuidv4();
        let ext = path.extname(req.file?.originalname!).split('.')[1];
        let icon = getIcon(ext);
        var nombre = `${h}.${ext}`;
        let result = await loadData(req.file?.buffer!, nombre);
        var file = new Files({
            typeFile: ext,
            cid: result.cid.toString(),
            icon,
            description: '',
            title: '',
            uid: h,
            typef:req.file?.mimetype,
            size:req.file?.size
        });
        var onSave = await file.save();
        //console.log(await publish(result.cid.toString()))
        res.status(200).json({error:false,data:onSave,msg:'success'});
    } catch (error) {
        console.log(error)
        res.status(500).json({error:true,data:null,msg:error})
    }
});

router.put('/update/info/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description } = req.body;

        const result = await Files.findByIdAndUpdate(id, {
            description,
            title
        }, { new: true })
        res.status(200).json({error:false,data:result,msg:'success'});
    } catch (error) {
        console.log(error)
        res.status(500).json({error:true,data:null,msg:error})
    }
});


export default router;