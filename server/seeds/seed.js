const db = require('../config/connection');
const { Test } = require('../models');

const testData = require('./testData.json');

db.once('open', async() => {
    await Test.deleteMany({});

    await Test.insertMany(testData);

    console.log('Test successful!');
    process.exit(0);
});