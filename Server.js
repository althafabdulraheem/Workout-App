require('dotenv').config()
const express=require('express');
const app=express();
const WorkRoutes=require('./routes/api');
const mongoose=require('mongoose');

app.use(express.json())
app.use((req,res,next)=>{
    
    // console.log(req.path)
    // console.log(req.method)
    next();
})

app.use('/workout',WorkRoutes);
app.listen(process.env.PORT,()=>{
    // console.log('listened');
})

mongoose.connect(process.env.MONGOURL).then(()=>{
    // console.log('connected')
}).catch(()=>{
    console.log('error')
});

app.use((req,res)=>{
    res.send("not fountd")
})




