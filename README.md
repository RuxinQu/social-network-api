# social-network-api

![Node](https://img.shields.io/badge/-Node.js-darkgreen)
![Mongoose](https://img.shields.io/badge/-Mongoose-darkred) 
![Luxon](https://img.shields.io/badge/-Luxon-green) 
![MIT license](https://img.shields.io/badge/License-MIT-green.svg)
![badge](https://img.shields.io/github/languages/top/ruxinqu/e-commerce-api)

## Description

This project is an CRUD api. It uses [MongoDB](https://www.mongodb.com/docs/) database and [mongoose](https://mongoosejs.com) as the ODM(Object Document Mapping). Routes are built with [Express](https://expressjs.com). [Luxon](https://moment.github.io/luxon/#/) library is used to parse and format time. There're two models: Thought and User. The reaction documents are embedded in thought documents. Users documents connect with thought documents by references. 

View the demo video of this project [**HERE**](https://drive.google.com/file/d/1um3Gtcm8dcz0WmXTic_RumIa0JCT2YXa/view?usp=sharing).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Technologies Used](#technologies-used)
- [Question](#question)

## Installation

1. Run `git@github.com:RuxinQu/social-network-api.git` on the terminal to git clone the repo.
2. Then run `npm install` to download all the packages.


## Usage

1. Run `npm start` to start the server.
2. Routes:

 `/api/users`
- GET all users
- GET a single user by its _id and populated thought and friend data
- POST a new user:
- PUT to update a user by its _id
- DELETE to remove user by its _id

`/api/users/:userId/friends/:friendId`
- POST to add a new friend to a user's friend list
- DELETE to remove a friend from a user's friend list

`/api/thoughts`
- GET to get all thoughts
- GET to get a single thought by its _id
- POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
- PUT to update a thought by its _id
- DELETE to remove a thought by its _id

`/api/thoughts/:thoughtId/reactions`
- POST to create a reaction stored in a single thought's reactions array field
- DELETE to pull and remove a reaction by the reaction's reactionId value


## License

This project is under MIT license

[https://opensource.org/licenses/MIT](https://opensource.org/lsicenses/MIT)

## Technologies Used

- [Luxon](https://moment.github.io/luxon/#/)
- [mongoose](https://mongoosejs.com)
- [express](https://expressjs.com)
## Question

 Contact me via: ruxinqu@gmail.com if you have addition questions.
