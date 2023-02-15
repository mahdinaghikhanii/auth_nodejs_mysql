const express = require('express')
const bodyParser = require('body-parser')  
const sabzLearnDB = require('./db/sabzlearnDB');

sabzLearnDB.connect((err)=> {
    if(err){
        console.log("You have Error", err);
    }else{
        console.log("Connect to sablearnDB succesfulyy");
        let newUserInsertQuery = 'insert into users values (2,"elina","mohammadi","mahdi1379","1401/11/27","elina")';
        sabzLearnDB.query(newUserInsertQuery , (error , result)=> {

            if(error){
                console.log("Insert user fail",error);
            }else{
                console.log("One User Inserted");
            }

        })
    }
}) 