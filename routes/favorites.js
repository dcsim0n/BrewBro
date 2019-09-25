/**
|--------------------------------------------------
| User favorites routes
|--------------------------------------------------
*/
const express = require('express');
const router = express.Router();

const favoritesController = require('../controllers/favoritesController');

router.post('/:userId/favorites', favoritesController.createFavorite );

module.exports = router; 