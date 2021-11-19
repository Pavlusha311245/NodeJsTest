const express = require('express');
const router = express.Router();
const {Project} = require('../models')
const {route} = require("express/lib/router");

/* GET projects */
router.get('/', function (req, res, next) {
    Project.findAll({raw: true}).then(projects => {
        res.send(projects)
    }).catch(err => console.log(err));
});

/* GET projects */
router.get('/:id', function (req, res, next) {
    Project.findOne({where: {id: req.params.id}}).then(project => {
        res.send(project)
    }).catch(err => console.log(err));
});

/* POST create project */
router.post('/', function (req, res, next) {
    Project.create(req.body).then(project => {
        res.send(project)
    }).catch(err => console.log(err))
});

router.put('/:id', function (req, res, next) {
    Project.update(req.body, {where: {id: req.params.id}}).then(project => {
        res.send(Project.findByPk(req.params.id))
    }).catch(err => console.log(err))
});

router.delete('/:id', function (req, res, next) {
    Project.destroy({where: {id: req.params.id}}).then(() => {
        res.send({
            status: "success"
        })
    }).catch(err => console.log(err))
});

module.exports = router;
