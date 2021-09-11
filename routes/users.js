var express = require('express');
const {route} = require("express/lib/router");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req);
});

router.post('/', (req, res, next) => {

});

module.exports = router;
