/**
|--------------------------------------------------
| Favorite data module
|--------------------------------------------------
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Favorite = sequelize.define('favorite', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  breweryId: { type: Sequelize.INTEGER, allowNull: false}
})

module.exports = Favorite;