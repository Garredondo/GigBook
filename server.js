const express = require("express");
const app = express();

const artistRouter = require("./routes/api/artists.js");

app.use("/api/artists", artistRouter);
