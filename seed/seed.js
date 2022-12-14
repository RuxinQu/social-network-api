const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');
const userData = require('./userData.json');
const thoughtData = require('./thoughtData.json');
const chalk = require('chalk')

connection.on('error', (err) => console.error(err));
connection.once('open', async () => {
    try {

        await User.deleteMany({});
        await Thought.deleteMany({});
        await User.collection.insertMany( userData );
        await Thought.collection.insertMany( thoughtData );
        console.log(chalk.green('=============Seeding complete ==========='));
    } catch (error) { console.log(error) }
})