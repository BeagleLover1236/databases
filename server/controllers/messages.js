var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if(err) {
        console.log('Error:', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    })
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var parameters = [req.body.message, req.body.username, req.body.roomname];
      models.messages.create(parameters, (err, results) => {
      if (err) {
        console.log('Error:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    })
  } // a function which handles posting a message to the database
};
//res.send(JSON.stringify(results))