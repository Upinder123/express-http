const express = require('express');

const app = express();
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });
// set static folder
////////////////////////////////////////////////
//                     MIDDLE WARE
const logger = (req,res,next)=>{
    console.log('hello');
    next();
}

//Init middleware
app.use(logger);
///////////////////////////////////////
// 1.) app is express basically
// 2.) use helps to manage middleware (things which can handle request (req)or response(res))
// 3.) express static methods helps us to set a express static folder
app.use(express.static(path.join(__dirname,'public')))
const PORT = process.env.PORT||5000;
///////////////////////////////////////////////////////
// RETURN JSON
// JSON FILE
// res == reponse method JSON 
const members = [
    {
        id : 3,
        name: "Upiner",
        email: "upinderjits@gmail.com"
    }
]
app.get('/api/members',(req,res) =>{
    res.json("members");
});
//
app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));