import express from "express";
import bodyParser from "body-parser";

import { connect } from "./config/database.js";

import LikeService from "./services/like-service.js";
import { UserRepository, TweetRepository } from "./repository/index.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import apiRoutes from "./routes/index.js";

app.use("/api", apiRoutes);
app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("mongo Db connected");

  // const userRepo = new UserRepository();
  // const tweetRepo = new TweetRepository();
  // const tweets = await tweetRepo.getAll(0, 10);

  // const users = await userRepo.getAll();
  // console.log(users);
  // const likeService = new LikeService();
  // await likeService.toggleLike(tweets[0].id, "Tweet", users[0].id);
});
