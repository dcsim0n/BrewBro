/**
|--------------------------------------------------
| User model
|--------------------------------------------------
*/
const Sequelize = require('sequelize');
const sequelize= require('../util/database');

const User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER , primaryKey: true },
  name: { type: Sequelize.STRING , allowNull: false },
})

module.exports = User;