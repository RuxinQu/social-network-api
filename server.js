const express = require('express');
const app = express();
const db = require('./config/connection');
const morgan = require('morgan');
const chalk = require('chalk')

const PORT = 4001;
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(chalk.green(`server is listening to port ${PORT}!`));
    });
});
