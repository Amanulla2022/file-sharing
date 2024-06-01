const express = require("express");
const mongoose = require("mongoose");
const fileRoutes = require("./routes/file");

const app = express();
const port = 8000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/fileSharing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection established successfully"))
  .catch((err) => console.log("Error while connecting database", err));

app.use(fileRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the File Sharing App");
});

app.listen(port, () => {
  console.log(`Your app is running on port ${port}`);
});
