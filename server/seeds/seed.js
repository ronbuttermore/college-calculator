const db = require('../config/connection');
const { Test, User } = require('../models');

const testData = require('./testData.json');
const userData = require('./userData.json');

db.once('open', async() => {
    await Test.deleteMany({});
    await User.deleteMany({});
    await Test.insertMany(testData);
    await User.insertMany(userData);
    
    console.log('Test successful!');
    process.exit(0);
});