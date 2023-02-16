const express = require('express')
const bodyParser = require('body-parser')  
const userRoutes = require('./routes/usersRoutes');
const cors = require('cors')

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use('/api/users/', userRoutes);