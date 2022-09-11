const express = require("express");
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.URL)
.then((response)=>console.log("connected successfully"))
.catch((err) =>console.log(err))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// routes
const animeRoutes = require("./routes/anime_routes")
app.use("/api/anime",animeRoutes)

// season
const seasonRoute = require("./routes/season_routes")
app.use("/api/season",seasonRoute)

app.listen(3000, ()=>{
    console.log("server is running")
})
