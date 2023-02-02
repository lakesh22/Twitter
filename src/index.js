import express from "express";
import { connect } from "./config/database.js";
const app = express();

import service from "./services/tweet-service.js";
import HashtagRepository from "./repository/hashtag-repository.js";
app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("mongo Db connected");
  let s = new service();
  await s.create("#new #tweet");
});
