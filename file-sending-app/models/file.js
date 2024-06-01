const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    originalFilename: {
      type: String,
      required: true,
    },
    newFilename: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FileModel = mongoose.model("files", fileSchema);

module.exports = FileModel;
