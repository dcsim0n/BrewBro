/**
|--------------------------------------------------
| User routes
|--------------------------------------------------
*/
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');



/* /user routes */
router.get( '/', usersController.selectUser );
router.delete( '/', usersController.deleteUser );
router.post( '/', usersController.createUser );
router.get( '/:id', usersController.userDetails );
router.post('/:userId/favorites', usersController.createFavorite );



module.exports = router;
