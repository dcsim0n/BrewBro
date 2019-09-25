/**
|--------------------------------------------------
| User routes
|--------------------------------------------------
*/
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');



/* GET users listing. */
router.get( '/', usersController.selectUser );
router.post( '/', usersController.createUser );
router.get( '/:id', usersController.userDetails )


module.exports = router;
