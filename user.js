const express=require('express');
const UserRouter=express.Router();
const Workout=require('../models/Workout');

UserRouter.get('/signup',async(req,res)=>{
  
        const {name,address}=req.body;
        try{
            const workout=await Workout.signUp(Workout,name,address);
            res.json({status:true,message:'created',data:workout});
        }
        catch(error)
        {
            console.log(error)
            res.send(error.message);
        }
        
    });
    


module.exports=UserRouter;