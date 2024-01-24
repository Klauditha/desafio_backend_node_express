const getAllUsers = (req, res) => {

  console.log('GET ALL USERS');
  //res.sendFile('src/data/users.json', { root: '.' });
  res.sendFile(process.cwd() + '/src/data/index.html');

  //res.send('GET ALL USERS');
};

const createUser = (req, res) => {
  console.log('CREATE USER');
  res.send('CREATE USER');
};

module.exports = {
  getAllUsers,
  createUser,
};
