const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

User.hasMany(Vote, {
  foreignKey: 'user_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

module.exports = { User, Post, Vote, Comment };
