// router

const express=require('express');
const router=express.Router();
const Workout=require('../models/Workout');
const mongoose=require('mongoose');

router.get('/',(req,res)=>{
    res.json({status:true});
});

router.post('/save',async(req,res)=>{
  
    const {name,address}=req.body;
    try{
        const workout=await Workout.create({name,address});
        res.json({status:true,message:'created',data:workout});
    }
    catch(error)
    {
        console.log(error)
        res.send(error.message);
    }
    
});

router.delete('/:id',async(req,res)=>{

    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.send('invalid id');
    }
    try{
            const workout=await Workout.findById(id)
            if(!workout)
            {
                res.json({statu:false,data:"not found"});
            }
            res.json({statu:true,data:workout});
    }
    catch(error)
    {
        res.send(error.message);
    }

    // res.send(req.params.id)
})

module.exports=router;
