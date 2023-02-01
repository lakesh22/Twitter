const Hashtag = require("../models/hashtags");

class HashtagRepository {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data); // array of objects
      return tags;
    } catch (error) {}
  }
  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async update(Hashtagid, data) {
    try {
      const tag = await Hashtag.findByIdAndUpdate(Hashtagid, data, {
        new: true,
      });
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
      }).select("title-_id");
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HashtagRepository;
