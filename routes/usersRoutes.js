const express = require('express')

const sabzLearnDB = require('../db/sabzlearnDB');

const userRoutes = express.Router();


userRoutes.post("/", (req, res) => {
    let date = new Date().toLocaleDateString('fa-IR');
    const body = req.body;
    sabzLearnDB.connect((err)=> {
        if(err){
            console.log("You have Error", err);
        }else{
            console.log("Connect to sablearnDB succesfulyy");
            let newUserInsertQuery = `insert into users values (null, "${body.firstname}","${body.lastname}",  "${body.password}", "${date}",${body.username})`;
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