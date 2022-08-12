const express=require('express')
const app=express()
const dbconnect=require('./dbConnect')
app.use(express.json())
const port=process.env.PORT || 5000;
const userRoute=require('./routes/userRoute')

app.use('/api/user/',userRoute)
// app.get('/',(req,res)=>res.send('hello world'))
app.get("/", (req, res) =>
  res.send(`Server Running successfully.....!`)
);
app.listen(port,()=>console.log(`app is listening on port ${port}`))