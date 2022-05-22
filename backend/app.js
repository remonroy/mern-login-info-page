const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());

const userRouter = require("./router/userRouter");
app.use("/api/v1", userRouter);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});
module.exports = app;
