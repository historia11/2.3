const express = require("express");
const app = express();

app.use(express.json());

const playlistRoutes = require("./app/routes/playlist_route");
app.use("/v1/internal/playlist", playlistRoutes);

app.listen(5500, () => {
  console.log("App running on port 5500");
});
