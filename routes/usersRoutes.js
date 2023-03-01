const express = require('express')
const sabzLearnDB = require('../db/sabzlearnDB');
const userRoutes = express.Router();


userRoutes.post("/new-user", (req, res) => {
    let date = new Date().toLocaleDateString('fa-IR');
    const body = req.body;
    sabzLearnDB.connect((err)=> {
        if(err){
            console.log("You have Error", err);
        }else{
            console.log("Connect to sablearnDB succesfulyy");
            let newUserInsertQuery = `insert into users values (null, "${body.firstname}","${body.lastname}",  "${body.password}", "${date}","${body.username}")`;
            sabzLearnDB.query(newUserInsertQuery , (error , result)=> {
                if(error){
                    console.log("Insert user fail",error);
                    res.send(null);
                }else{
                    console.log("One User Inserted"); 
                    res.json("success add user!");
                }
            })
        }
    }) 
})

userRoutes.get('/all-users', (req , res) => {
    sabzLearnDB.connect((err) => {
        if(err){
            console.log("Your have Error" , err);
        }else{
            console.log("Connected to sabzlearnDB Success");
            let getAllUsersQuery = 'SELECT * FROM users;'
            sabzLearnDB.query(getAllUsersQuery , (err , result) =>{
                if(err){
                    console.log("Get all users fail" , err);
                    res.send("bad request");
                    res.end();
                }else{
                    console.log("Success Giving all users");
                    res.send(JSON.stringify(result));
                    res.end();
                }
            })
        }
    })
    
});

userRoutes.post('/delete-user', (req ,res) => {
    const body = req.body;
    sabzLearnDB.connect((err) => {
        if(err){
            console.log("Your have Error" , eer);
        }else{
            console.log("Connected Success");
            let deleteQuery = `delete from users where firstname ='${body.firstname}', lastname = '${body.lastname}', password = '${body.password}'`;
            sabzLearnDB.query(deleteQuery, (err, result)=> {
                if(err){
                    console.log("Delete user failed", err);
                    res.json("Bad request");
                }else{
                    console.log("Delete user Success");
                    res.jsonp("Delete User Success");
                    res.end();
                }

            })
        }
    })
})

module.exports = userRoutes;