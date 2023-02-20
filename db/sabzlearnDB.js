const mySql = require('mysql2')


sabzLearnDB = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'password',
    database : 'sabzlearn'
});

module.exports = sabzLearnDB;