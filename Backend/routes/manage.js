const express = require("express");
const router = express.Router();

const checkAuth = require(__dirname + './../middleware/checkAuth');
const checkTimeLocation = require(__dirname + './../middleware/timeLocation');
const manageController = require('../controllers/manage');


router.get("/new-song/:id_petrecere", manageController.get_new_song);
router.get("/test", manageController.test);  
module.exports = router;
