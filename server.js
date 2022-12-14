const express = require('express');
const app = express();
const db = require('./config/connection');
const mongoose = require('mongoose');
const morgan = require('morgan');
const chalk = require('chalk')
const route = require('./routes');

const PORT = process.env.PORT || 4001;
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(route);

mongoose.set('debug', true);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(chalk.green(`server is listening to port ${PORT}!`));
    });
});
