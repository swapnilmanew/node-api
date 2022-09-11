const Anime = require("../models/anime_model")
class AnimeControllers {
    // getting all animes
    static index = async(req,res) =>
    {
      try {
        const AnimeData = await Anime.find({});
        res.json(AnimeData);
      } catch (error) {
            console.log(error)
      }
    }

    // storing an anime
    static store = async(req,res) =>
    {
        const {
            anime_name,
            episodes,
            released_year,
            seasons,
            anime_category,
            thumbnail,
          } = req.body;
      try {
        const AnimeData = await new Anime({
            anime_name: anime_name,
            anime_episodes: episodes,
            anime_released_year: released_year,
            anime_seasons: seasons,
            anime_category: anime_category,
            anime_thumbnail: "Anime Thumbnail",
        });
        const fr = await AnimeData.save();
        return res.json({
            "msg" : "Anime created successfully",
            "status_code": 1,
            "anime_data" : fr,
        });
      } catch (error) {
        return res.json({
            "msg" : "Something went wrong !",
            "status_code": 1,
            "anime_data" : [],
        });
      }
    }
}
module.exports = {
    index : AnimeControllers.index,
    store : AnimeControllers.store,
}