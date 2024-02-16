var db = require('../db');

//SELECT Id, message, roomname, userId FROM messages JOIN users ON messages.userId = users.Id

module.exports = {
  getAll: function(callback) {
    var query = 'SELECT * FROM messages';
    db.query(query, function(err, results) {
      if(err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  }, // a function which produces all the messages
  create: function (parameters, callback) {
    var queryString = `INSERT INTO messages (message, userId, roomname) VALUE (?, (SELECT Id FROM users WHERE username = ?), ?)`;
    db.query(queryString, parameters, (err, results) => {
      if(err) {
        callback(err)
      } else {
        callback(null, results)
      }
    });
  } // a function which can be used to insert a message into the database
};

//(SELECT Id FROM users WHERE username = ? limit 1)
//INSERT INTO messages (message, userId, roomname) VALUE ('howdy', 1, lobby);

//`SELECT Id, message, roomname, userId FROM messages JOIN users ON messages.userId = users.Id`