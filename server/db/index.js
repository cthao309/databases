let Sequelize = require('sequelize');
let orm = new Sequelize('chat', 'charlie', 'charlie');

let User = orm.define('User', {
  user_name: Sequelize.STRING
})

let Message = orm.define('Message', {
  txt: Sequelize.STRING,
  room_name: Sequelize.STRING
})


User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;


// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".

// let module.exports.dbConnection = mysql.createConnection({
//   user: 'localhost',
//   password: '',
//   database: 'chat',
//   multipleStatements: true
// });

// module.exports.dbConnection.connect();