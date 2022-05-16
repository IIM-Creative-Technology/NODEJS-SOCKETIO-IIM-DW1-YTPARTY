import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    likes: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", VideoSchema);
