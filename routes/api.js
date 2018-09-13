const express = require('express')
const router = express.Router()
const User = require('../models/user')




//get a one user of call from db
router.get('/call/:id', function(req, res, next){
    User.findById(req.params.id).then(doc => {
        if (!doc) { return res.status(404).end()}
        return res.status(200).json(doc)
    })
    .catch(err => next(err))
    })

//get a list of call from db 
router.get('/call', function(req, res, next){
    User.find({}).then(function(user){
        res.send(user)
    })
})

//add a new call to the db
router.post('/call', function(req, res, next){
    User.create(req.body).then(function(user){
        res.send(user)
    }).catch(next)
    })
//update a call in the db 
router.put('/call/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user)
        })
    })
 
    
})
//delete a call from the db
router.delete('/call/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user)
    })
    console.log("delete complete")
})


module.exports = router;