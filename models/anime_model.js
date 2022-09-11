const mongoose = require("mongoose")
const animeSchema = new mongoose.Schema({
    anime_name : {
        type: String,
        required : true,
    },
    anime_seasons: {
        type: Number,
        required: true,
      },
      anime_released_year: {
        type: Number,
        required: true,
      },
      anime_category: {
        type: String,
        required: true,
      },
      anime_thumbnail: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now(),
      },
})
const Anime  = mongoose.model("Anime", animeSchema);
module.exports = Anime