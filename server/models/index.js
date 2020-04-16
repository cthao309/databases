var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var queryString = `SELECT * FROM messages
                        INNER JOIN roomNames
                          ON roomName.id = messages.roomid
                        INNER JOIN userNames
                          on userNames.id = messages.userid`;
      db.dbConnection.query(queryString, (err, results) => {
        if (err) { throw err; }

        callback(results);
      });
    },
    // a function which can be used to insert a message into the database
    post: function () {}
  },

  users: {
    // Ditto as above for users
    get: function () {},
    post: function () {}
  }
};

