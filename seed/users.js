const mongoose = require('../config/database');
const User = require('../models/usersModel');

//? save the connection in a variable
const db = mongoose.connection;

//! Make sure code is not run till connected
db.on('open', async () => {
  const users = [
    {
      firstName: 'Jhimson',
      lastName: 'Pamisa',
      username: 'jhimson12',
      password: 'pamisa123',
    },
    {
      firstName: 'Sharmine',
      lastName: 'Obsioma',
      username: 'shang12',
      password: 'pamisa123',
    },
    {
        firstName: 'Crisha',
        lastName: 'Eltanal',
        username: 'crisha12',
        password: 'pamisa123',
      },
  ];

  try {
    await User.deleteMany({});
    try {
      const newUsers = await User.create(users);
      console.log(newUsers);
      db.close();
    } catch (error) {
      console.log(error);
      db.close();
    }
  } catch (error) {
    console.log(error);
    db.close();
  }
});
