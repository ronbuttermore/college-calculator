const db = require('../config/connection');
const { Search, User } = require('../models');
const searchData = require('./searchData.json');
const userData = require('./userData.json');

db.once('open', async() => {
    try {
        await Search.deleteMany({});
        await User.deleteMany({});
    
        await User.create(userData);
    
        for (let i = 0; i < searchData.length; i++) {
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

    console.log('Seed successful!');
    process.exit(0);
});