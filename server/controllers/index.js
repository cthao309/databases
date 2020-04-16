var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get((results) => {
        res.send(results);
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {

    }
  },

  users: {
    // Ditto as above for users
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

