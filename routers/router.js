/* This file will handle all the routing related stuff */
let express = require('express');
let router = express.Router();
let controller = require("../controllers/controller");

router.post('/', function(req, res) {
    controller.insertcatintoDB(req, res);
});

router.get('/', (req, res) => {
    controller.getcatfromDB(req, res);
});

module.exports = router;