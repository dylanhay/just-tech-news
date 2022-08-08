const { User } = require('../models');

const userData = [
    {
        username: "user1",
        email: "user1@user.com",
        password: "password1"
    },
    {
        username: "user2",
        email: "user2@user.com",
        password: "password2"
    },
    {
        username: "user3",
        email: "user3@user.com",
        password: "password3"
    },
    {
        username: "user4",
        email: "user4@user.com",
        password: "password4"
    },
    {
        username: "user5",
        email: "user5@user.com",
        password: "password5"
    },
    {
        username: "user6",
        email: "user6@user.com",
        password: "password6"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
