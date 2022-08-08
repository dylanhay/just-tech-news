const { Post } = require('../models');

const postData = [
    {
        title: "Post number 1",
        post_url: "https://post1.com/press",
        user_id: 1
    },
    {
        title: "Post number 2",
        post_url: "https://post2.com/press",
        user_id: 2
    },
    {
        title: "Post number 3",
        post_url: "https://post3.com/press",
        user_id: 3
    },
    {
        title: "Post number 4",
        post_url: "https://post4.com/press",
        user_id: 4
    },
    {
        title: "Post number 5",
        post_url: "https://post5.com/press",
        user_id: 5
    },
    {
        title: "Post number 6",
        post_url: "https://post6.com/press",
        user_id: 6
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;