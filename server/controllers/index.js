var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {

      Message.findAll({ include: [User] })
        .complete(function(err, results) {
          if(!err) res.json(results);
        })

      // models.messages.get((err, results) => {
      //   if(!err) res.json(results);
      // });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      User.findOrCreate({user_name: req.body[username]})
        .complete(function(err, user) {
            let params = {
              txt: req.body[text],
              userid: user.id
              room_name: req.body[roomname]
            };

            Message.create(params)
              .complete(function(err, results) {
                if(!err) res.sendStatus(201);
              })

        })

      // let params = [req.body[text], req.body[user_name], req.body[room_name]];

      // models.messages.post(params, (err, results) => {
      //   if(!err) res.json(results);
      // });
    }
  },

  users: {
    // Ditto as above for users
    get: function (req, res) {
      User.findAll()
      .complete(function(err, results) {
        if(!err) res.json(results);
      })

      // models.users.get((err, results) => {
      //   if(!err) res.json(results);
      // });
    },
    post: function (req, res) {
      User.create({user_name: req.body[username]})
        .complete(function(err, user) {
          if(!err) res.sendStatus(201);
        });

      // let params = [req.body[user_name]];

      // models.users.post(params, (err, results) => {
      //   if(!err) res.json(results);
      // });
    }
  }
};

