const express = require("express");
const connect = require("./config/database");
const app = express();

const { TweetRepository } = require("./repository/hashtag-repository");
const TweetService = require("./services/tweet-service");
app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("mongo Db connected");
  let service = new TweetService();
  const tweet = service.create({
    content: "This is after #processing really #excited,#fun",
  });
  console.log(tweet);
});
