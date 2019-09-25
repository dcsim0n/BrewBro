/**
|--------------------------------------------------
| User routes
|--------------------------------------------------
*/
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');



/* GET users listing. */
router.get( '/', userController.selectUser );
router.post( '/', userController.createUser );


module.exports = router;
