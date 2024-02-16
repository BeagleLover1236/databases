var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query(`SELECT * FROM users`, (err, results) => {
      callback(err, results);
    })
  },
  create: function (params, callback) {
    const queryStr = `INSERT INTO users (username) VALUES (?)`
    db.query(queryStr, params, (err, results) => {
      callback(err, results);
    })
  }
};
