const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const db = require('./dbConnection');

// Routers
const doctorsRouter = require('./routes/doctorsRoutes');

const app = express();
//Configuring express server
app.use(bodyparser.json());


// Create DB
// Run this for the first time running the app.
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE crud_demo';
    db.query(sql, (err, result) => {
        if(err) console.log(err);
        res.send('database created successfuly');
    });
})

// Create table
app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE doctors(id int AUTO_INCREMENT, Name VARCHAR(200), Specialization VARCHAR(200), Hospital VARCHAR(200), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err)  console.log(err);
        console.log(result);
        res.send('database created successfuly');
    });
})


app.use('/doctor', doctorsRouter);





  const port = 5000;
  app.listen(port, () => {
    console.log(`App listening at:: http://localhost:${port}`);
  })