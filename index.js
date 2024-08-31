
const express = require('express');

const app = express();
const PORT = 3000;
const users = [
    {
        id : 1,
        emailId : "student1@gmail.com",
        location : "Hyderabad"
    },
    {
        id : 2,
        emailId : "student2@gmail.com",
        location : "Pune"
    },
    {
        id : 3,
        emailId : "student3@gmail.com",
        location : "Mumbai"
    }
]

app.get('/' , (req , res)=>{
  res.send("hello world!!");
});

app.get('/users',(req,res)=>{
  res.send(JSON.stringify(users));
});
app.get('/users/:id',(req,res)=>{
    console.log(req.params);

    const user = users.find(item =>item.id === parseInt(req.params.id));
    console.log(user); // undefind
    if(user){
    res.status(200).send(JSON.stringify(user));
    }
    else{
      res.status(404).send("Not Found");
    }
});

app.listen(PORT , ()=> {
  console.log("server is up and running at http://localhost:3000")
});