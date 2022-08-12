const mongoose=require('mongoose')
const URL='mongodb+srv://Hariprakash:Hariprakash20@cluster0.3wyvyo5.mongodb.net/resume-builder'
mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
const connection=mongoose.connection
connection.on('connected',()=>{
    console.log('MongoDB connection successfull')
})
connection.on('error',(error)=>{
    console.log(error)
})