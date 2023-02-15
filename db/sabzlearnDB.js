const mySql = require('mysql')


sabzLearnDB = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'password',
    database : 'sabzlearn'
});

module.exports = sabzLearnDB;