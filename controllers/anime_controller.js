const Anime = require("../models/anime_model");
class AnimeControllers {
  // getting all animes
  static index = async (req, res) => {
    try {
      const AnimeData = await Anime.find({});
      res.json(AnimeData);
    } catch (error) {
      console.log(error);
    }
  };
  // storing an anime
  static store = async (req, res) => {
    const {
      anime_name,
      episodes,
      released_year,
      seasons,
      anime_category,
      anime_description,
      anime_thumbnail,
    } = req.body;
    try {
      const AnimeData = await new Anime({
        anime_name: anime_name,
        anime_episodes: episodes,
        anime_released_year: released_year,
        anime_seasons: seasons,
        anime_category: anime_category,
        anime_description: anime_description,
        anime_thumbnail: anime_thumbnail,
      });
      const fr = await AnimeData.save();
      return res.json({
        msg: "Anime created successfully",
        status_code: 1,
        anime_data: fr,
      });
    } catch (error) {
      return res.json({
        msg: "Something went wrong !",
        status_code: 1,
        anime_data: [],
      });
    }
  };
  //  showing an anime
  static show = async (req, res) => {
    const _id = req.params._id;
    try {
      const AnimeData = await Anime.findOne({ _id });
      res.json(AnimeData);
    } catch (error) {
      console.log(error);
    }
  };
  //  Updating an anime
  static update = async (req, res) => {
    const {
      anime_id,
      anime_name,
      episodes,
      released_year,
      seasons,
      anime_category,
      anime_description,
      anime_thumbnail,
    } = req.body;
    try {
      const AnimeData = await Anime.findByIdAndUpdate(anime_id, {
        anime_name: anime_name,
        anime_episodes: episodes,
        anime_released_year: released_year,
        anime_seasons: seasons,
        anime_category: anime_category,
        anime_description: anime_description,
        anime_thumbnail: anime_thumbnail,
      });
      const fr = await AnimeData.save();
      return res.json({
        msg: "Anime updated successfully",
        status_code: 1,
        anime_data: fr,
      });
    } catch (error) {
      return res.json({
        msg: "Something went wrong !",
        status_code: 1,
        anime_data: [],
      });
    }
  };
}
module.exports = {
  index: AnimeControllers.index,
  store: AnimeControllers.store,
  show: AnimeControllers.show,
  update: AnimeControllers.update,
};
