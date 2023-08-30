require('dotenv').config()
const express=require('express');
const app=express();
const WorkRoutes=require('./routes/api');
// use cors
app.use(express.json())
app.use((req,res,next)=>{
    
    console.log(req.path)
    console.log(req.method)
    next();
})

app.use('/workout',WorkRoutes);
app.listen(process.env.PORT,()=>{
    console.log('listened');
})

app.use((req,res)=>{
    res.send("not fountd")
})




