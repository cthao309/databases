var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      // fetch all messages
      // id, text, roomname and username
      var queryString = `SELECT *, users.user_name FROM messages
                        INNER JOIN rooms
                          ON (rooms.id = messages.roomid)
                        INNER JOIN users
                          on (users.id = messages.userid)
                        ORDER by messages.id DESC`;
      db.dbConnection.query(queryString, (err, results) => {
        if (err) { throw err; }

        callback(results);
      });
    },
    // a function which can be used to insert a message into the database
    post: function (params, callback) {
      // store a message
      let queryStr = "INSERT INTO messages(txt, userid, roomid) VALUES (?,(SELECT id FROM users where user_name = ? limit 1),(SELECT id FROM rooms = ? limit 1))";

      db.query(queryStr, params, function(err, results) {
        callback(results)
      })
    }
  },

  users: {
    // Ditto as above for users
    get: function (callback) {
      // fetch all users
      let queryStr = "SELECT * FROM users"
      db.query(queryStr, (err, results) => {
        callback(results)
      })
    },
    post: function (params, callback) {
      // create a user
      let queryStr = "INSERT INTO users(user_name) VALUES (?)";

      db.query(queryStr, (err, results) => {
        callback(results)
      })
    }
  }
};

