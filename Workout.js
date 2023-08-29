const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const WorkoutSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

},{timestamps:true})
// WorkoutSchema.set('collection', 'users'); // changing colleciton name
module.exports=mongoose.model('Workout',WorkoutSchema)