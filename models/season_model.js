const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const seasonsSchema = new mongoose.Schema({
  anime_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  season_number: {
    type: Number,
    required: true,
  },
});

const Seasons = mongoose.model("Seasons", seasonsSchema);
module.exports = Seasons;
