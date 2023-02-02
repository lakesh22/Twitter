import Hashtag from "../models/hashtags.js";

class HashtagRepository {
  async create(data) {
    try {
      const tags = await Hashtag.create(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data); // array of objects
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const tag = await Hashtag.findByIdAndRemove(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async findByName(titleList) {
    try {
      const tags = await Hashtag.find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HashtagRepository;
