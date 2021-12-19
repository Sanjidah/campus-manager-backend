const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true,
    },
  },

  description: {
    // type: Sequelize.STRING,
    type: Sequelize.TEXT,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://timesandtrendsacademy.com/wp-content/uploads/How-to-pick-the-best-fashion-designing-college-re850.jpg",
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "no address",
    validate: {
      notEmpty: true,
    },
  }

});

module.exports = Campus;