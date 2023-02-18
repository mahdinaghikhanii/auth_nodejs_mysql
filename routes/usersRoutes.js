const express = require('express')
const userRoutes = express.Router();
const sabzLearnDB = require('../db/sabzlearnDB');


userRoutes.post('/', (req, res) => {
    let date = new Date().toLocaleDateString('fa-IR');
    const body = req.body;
    sabzLearnDB.connect((err)=> {
        if(err){
            console.log("You have Error", err);
        }else{
            console.log("Connect to sablearnDB succesfulyy");
            let newUserInsertQuery = `insert into users values (4 ${body.firstname},${body.lastname}, ${body.username}, ${body.password},${date})`;
            sabzLearnDB.query(newUserInsertQuery , (error , result)=> {
                if(error){
                    console.log("Insert user fail",error);
                    res.send(null);
                }else{
                    console.log("One User Inserted");
                    res.send(true);
                }
            })
        }
    }) 
})

module.exports = userRoutes;