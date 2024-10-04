import mongoose from "mongoose";
import User from "./user";

const spotifyUserSchema = new mongoose.Schema({
  spotifyId: {
    type: String,
    required: true,
    unique: true,  // Ensures spotifyId is unique
  },
  userInfo: {
    type: User.schema,
    required: true
  },
  tags: {
    type: JSON,
    default: {}  // Default to an empty Map
  }
});

const SpotifyUser = mongoose.models.SpotifyUser || mongoose.model('SpotifyUser', spotifyUserSchema);

export default SpotifyUser;
