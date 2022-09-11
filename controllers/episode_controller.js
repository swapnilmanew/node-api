const Episodes = require("../models/season_model")
class EpisodesController {
    // getting all animes
    static index = async (req,res) =>
    {
        const anime_id = req.params._anime_id;
        const season_id = req.params._season_id;
      try {
        const EpisodesData = await Episodes.find({anime_id:anime_id, season_id: season_id});
        res.json(EpisodesData);
      } catch (error) {
            console.log(error)
      }
    }
    // updating season
    static store = async(req,res) =>
    {
        const {
            anime_id,
            season_id,
            season_number,
          } = req.body;
      try {
        const seasonData = await new Episodes({
            anime_id: anime_id,
            season_id:season_id,
            episode_number:episode_number,
            episode_download_link:episode_download_link,
        });
        const fr = await seasonData.save();
        return res.json({
            "msg" : "Episode created successfully !",
            "status_code": 1,
            "episode_data" : fr,
        });
      } catch (error) {
        return res.json({
            "msg" : "Something went wrong !",
            "status_code": 1,
            "episode_data" : [],
        });
      }
    }
    static update = async(req,res) =>
    {
        const {
            episode_id,
            episode_number,
            episode_download_link,
          } = req.body;
      try {
        const seasonData = await Episodes.findByIdAndUpdate(
          episode_id,{
            episode_number: episode_number,
            episode_download_link: episode_download_link
        });
        const fr = await seasonData.save();
        return res.json({
            "msg" : "Episode updated !",
            "status_code": 1,
            "episode_data" : fr,
        });
      } catch (error) {
        return res.json({
            "msg" : "Something went wrong !",
            "status_code": 1,
            "episode_data" : [],
        });
      }
    }
}
module.exports = {
    index : EpisodesController.index,
    store : EpisodesController.store,
    update : EpisodesController.update,
}
