const express = require('express')
const bodyParser = require('body-parser')  
const userRoutes = require('./routes/usersRoutes');
const cors = require('cors')
const s ='2';

const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoutes);


app.listen(3000, ()=>{

    console.log("web server is running")
})