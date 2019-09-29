/**
|--------------------------------------------------
| User routes
|--------------------------------------------------
*/
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const favoritesController = require('../controllers/favoritesController');



/* GET users listing. */
router.get( '/', usersController.selectUser );
router.delete( '/', usersController.deleteUser );
router.post( '/', usersController.createUser );
router.get( '/:id', usersController.userDetails );
router.post('/:userId/favorites', favoritesController.createFavorite );



module.exports = router;
