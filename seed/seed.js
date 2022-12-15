const connection = require('../config/connection');
const { User, Thought } = require('../models/index')
const userData = require('./userData.json');
const chalk = require('chalk')

connection.on('error', (err) => console.error(err));
connection.once('open', async () => {
    try {
        await Thought.deleteMany({});
        await User.deleteMany({});
        await User.collection.insertMany(userData);
        console.log(chalk.green('=============Seeding complete ==========='));
    } catch (error) { console.log(error) }
})