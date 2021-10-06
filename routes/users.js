const express = require('express');
const router = express.Router();
const {User} = require('../models')
const {route} = require("express/lib/router");

/* GET users */
router.get('/', function (req, res, next) {
    User.findAll({raw: true}).then(users => {
        res.send(users)
    }).catch(err => console.log(err));
});

/* GET user */
router.get('/:id', function (req, res, next) {
    User.findAll({where: {id: req.params.id}}).then(user => {
        res.send(user)
    }).catch(err => console.log(err));
});

module.exports = router;
