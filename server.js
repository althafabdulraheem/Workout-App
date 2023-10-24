require('dotenv').config()
const express=require('express');
const app=express();
const workoutRouter=require('./route/WorkoutRoute')
// app.use((req,res,next)=>{
//     console.log(req.method)
//     // next() middleware
// })
app.use(express.json())
app.use('/api',workoutRouter)
app.listen(process.env.PORT,()=>{
    console.log("ready");

})

app.get('/',(req,res)=>{
    res.send("done")
})