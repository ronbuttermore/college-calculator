const db = require('../config/connection');
const { Test, User } = require('../models');
const testData = require('./testData.json');
const userData = require('./userData.json');

db.once('open', async() => {
    try {
        await Test.deleteMany({});
        await User.deleteMany({});
    
        await User.create(userData);
    
        for (let i = 0; i < testData.length; i++) {
          const { _id, savedBy } = await Test.create(testData[i]);
          const user = await User.findOneAndUpdate(
            { username: savedBy },
            {
              $addToSet: {
                tests: _id,
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