const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EpisodesSchema = new mongoose.Schema({
  anime_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  season_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  episode_number: {
    type: Number,
    required: true,
  },
  episode_download_link: {
    type: String,
    required: true,
  },
});

const Episodes = mongoose.model("Episodes", EpisodesSchema);
module.exports = Episodes;
