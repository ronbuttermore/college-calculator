const db = require('../config/connection');
const { User, Search } = require('../models');

const userData = require('./userData.json');
const searchData = require('./searchData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Search.deleteMany({});

  const users = await User.insertMany(userData);
  const searches = await Search.insertMany(searchData);

  for (newSearch of searches) {
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.searches.push(newSearch._id);
    await tempUser.save();
  }

  console.log('all done!');
  process.exit(0);
});
