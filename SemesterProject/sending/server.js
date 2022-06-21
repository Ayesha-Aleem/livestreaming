const express=require('express');
const mongose=require('mongoose');
const morgan=require('morgan');
const path=require('path');

const app=express();
const PORT=process.env.PORT || 7800;

const routes=require('./routes/api')
// const MONGODB_URI='mongodb+srv://ayesha:FatimaA2@cluster.oah8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//http request logger means what route we are hitting
//the 1st one is coonection is going to be in your server or anywhere in world
//2 is option you can pass
console.clear()
mongose.connect('mongodb://localhost/SemesterProject',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
//if succesful otherwise no printed
mongose.connection.on('connected',()=>{
    console.log('Mongose is connected')
});

//making all thereq cming in as json and make them available in req.body-Json data parsing
app.use(express.json())//middle ware being hooked in express
app.use(express.urlencoded({extended:false})) //extended means how deep you want to go to that object

app.use(morgan('tiny'))
app.use('/api',routes)
app.listen(PORT,console.log(`server is starting at ${PORT}`))

