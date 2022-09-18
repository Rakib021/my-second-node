const express = require('express');
const cors = require('cors');
const app = express();
const port=process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello Rakib whats up .you learn node js wow")
});



const users = [

    {id:1, name:'Jashim' , email:'jashim@gmail.com',job:"fronted engineer",phone:'019984375847' },
    {id:2, name:'Rahim' , email:'Rahim@gmail.com',job:"fronted engineer",phone:'019984375847' },
    {id:3, name:'karim' , email:'karim@gmail.com',job:"fronted engineer",phone:'019984375847' },
    {id:4, name:'Rahman' , email:'Rahman@gmail.com',job:"fronted engineer",phone:'019984375847' },
    {id:5, name:'Bapparaz' , email:'Bapparaz@gmail.com',job:"fronted engineer",phone:'019984375847' },
    {id:6, name:'Omor sani' , email:'Omor sani@gmail.com',job:"fronted engineer",phone:'019984375847' },
    {id:7, name:'Salman' , email:'Salman@gmail.com',job:"fronted engineer",phone:'019984375847' },
    {id:8, name:'sakib' , email:'sakib@gmail.com',job:"fronted engineer",phone:'019984375847' },
    {id:9, name:'siam' , email:'siam@gmail.com',job:"fronted engineer",phone:'0199843758'}
];

app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u=>u.id === id);
    // const user = users[id];

    res.send(user);
});

app.post("/user",(req,res)=>{
    console.log("request",req.body);
    const user = req.body;
    user.id = users.length +1;
    users.push(user);
    res.send(user);
})

// app.get('/fruits',(req,res)=>{
//     res.send(['mango','oranges','pineapple']);
// })
app.listen(port,()=>{
    console.log("Example app listening on port ",port);
})