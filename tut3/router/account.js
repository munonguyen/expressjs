const express = require('express');
var router = express.Router();
var Account = require('../models/account');



router.get('/',(req,res,next) =>{
    Account.find({
    
    })
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.status(500).json('Error getting account list: ' + err.message);
    })
})

router.post('/',  (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    Account.create({
        username:username,
        password:password
    })
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.status(500).json('Error creating account: ' + err.message);
    })
})

router.put('/:id',  (req, res, next) => {
   const id = req.params.id;
   const newPassword = req.body.newPassword;

    Account.findByIdAndUpdate(id,{
        password:newPassword
    })
    .then(data =>{
        res.json('Account updated successfully');
    })
    .catch(err =>{
        res.status(500).json('Error updating account: ' + err.message);
    })
})

router.delete('/:id',  (req, res, next) => {
    const id = req.params.id;
    Account.deleteOne({
        _id:id
    })
    .then(data=>{
        res.json('Account deleted successfully');
    })
    .catch(err =>{
        res.status(500).json('Error deleting account: ' + err.message);
    })



})




module.exports = router;