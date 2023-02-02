import mongoose from "mongoose";

export const connect = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1/twitter_Dev").catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });
};
