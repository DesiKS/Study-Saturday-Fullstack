const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/study-saturdays',
  {
    logging: false
  }
);
console.dir(process.env.DATABASE_URL);

module.exports = db;
