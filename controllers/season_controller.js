const Seasons = require("../models/season_model")
class SeasonsController {
    // getting all animes
    static index = async (req,res) =>
    {
        const anime_id = req.params._anime_id;
      try {
        const seasonsData = await Seasons.find({anime_id:anime_id});
        res.json(seasonsData);
      } catch (error) {
            console.log(error)
      }
    }
    // updating season
    static store = async(req,res) =>
    {
        const {
            anime_id,
            season_number,
          } = req.body;
      try {
        const seasonData = await new Seasons({
            anime_id: anime_id,
            season_number: season_number,
        });
        const fr = await seasonData.save();
        return res.json({
            "msg" : "Season created successfully !",
            "status_code": 1,
            "season_data" : fr,
        });
      } catch (error) {
        return res.json({
            "msg" : "Something went wrong !",
            "status_code": 1,
            "season_data" : [],
        });
      }
    }
    static update = async(req,res) =>
    {
        const {
            season_id,
            season_number,
          } = req.body;
      try {
        const seasonData = await Seasons.findByIdAndUpdate(
            season_id,{
            season_number: season_number,
        });
        const fr = await seasonData.save();
        return res.json({
            "msg" : "Season updated !",
            "status_code": 1,
            "season_data" : fr,
        });
      } catch (error) {
        return res.json({
            "msg" : "Something went wrong !",
            "status_code": 1,
            "season_data" : [],
        });
      }
    }
    
}
module.exports = {
    index : SeasonsController.index,
    store : SeasonsController.store,
    update : SeasonsController.update,
}
