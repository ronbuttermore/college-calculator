const db = require('../config/connection');
const { User, Search } = require('../models');

const userData = require('./userData.json');
const searchData = require('./searchData.json');

db.once('open', async () => {
  try {
  await User.deleteMany({});
  await Search.deleteMany({});

  await User.create(userData);

  for (let i=0; i < searchData.length; i++) {
    const { _id, searchedBy } = await Search.create(searchData[i]);
    const user = await User.findOneAndUpdate(
      { username: searchedBy },
      {
        $addToSet: {
          searches: _id,
        },
      }
    );
  }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});