const express = require('express');
const router = express.Router()
const db = require('../dbConnection');

// Add new doctors
router.post('/newdoctor',(req, res) => {

    let newDoctor = {
        Name: req.body.Name,
        Specialization: req.body.Specialization,
        Hospital: req.body.Hospital
    };
    let sql = 'INSERT INTO doctors SET?';
    let query = db.query(sql, newDoctor, (err, result) => {
        if(!newDoctor){
            console.log(err);
            return res.status(404).send("Resource creation failed.")
        }else {
            console.log(result);
            res.send(newDoctor)
        }

    })
})

// Get Doctors
router.get('/list',(req, res) => {

    let sql = 'SELECT * FROM doctors';
    let query =  db.query(sql, (err, result) => {
        if(err){
            console.log(err);
            return res.status(404).send("Resource not found.")
        }else {
            console.log(result);
            res.send(result)
        }

    })
})

// Get a Doctor
router.get('/getDoctor/:id', (req, res) => {
    let sql = `SELECT * FROM doctors WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if(err){
            res.status(500).json({
            "success": false
            })
        }else{
                res.status(200).send(result)
            }
    })
   
})

// Update a doctor
router.put('/updateDoctor/:id',(req, res) => {
    let doctor = 
        {
            Name: req.body.Name,
            Specialization: req.body.Specialization,
            Hospital: req.body.Hospital
        };
    
        let sql = `UPDATE doctors SET ? WHERE id=${req.params.id}`;
        let query = db.query(sql, doctor, (err, result) => {
            if(err){
                res.status(500).json({
                "success": false,
                "msg": "Update not successful, try again."  
                })
                }else{
                    res.status(200).send(result)
                }
        })
})

// Delete Doctor
router.delete('/delete/:id', (req, res) =>{
    let sql = `DELETE FROM doctors WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err){
            res.status(500).json({
            "success": false,
            "msg": "Delete not successful, try again."  
            })
            }else{
                res.status(200).send(result)
            }
    })
    
})

// export module
module.exports = router;