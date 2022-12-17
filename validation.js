const express = require('express');
const router = express()             

const tasks =[
    {id:1, name:"task 1", completed:"false"},
    {id:2, name:"task 2", completed:"false"},
    {id:3, name:"task 3", completed:"false"}, 
]

const task = (req,res)=>{
    res.status(201).send(tasks)
}

module.exports= task;

