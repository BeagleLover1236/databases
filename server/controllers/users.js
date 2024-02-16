var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        console.log('Error:', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    })
  },
  post: function (req, res) {
    var params = [req.body.username];
    models.users.create(params, (err, results) => {
      if(err) {
        console.log('Error:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    })
  }
};
