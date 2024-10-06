import connectDB from "@/middleware/mongoose";
import SpotifyUser from "@/models/spotifyUser";
import { NextResponse } from "next/server";

const handler = async (req, res) => {
    let { spotifyId } = await req.json();
    try {
        let user = await SpotifyUser.findOne({ spotifyId });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        let tags = user.tags;

        return NextResponse.json(tags, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

//FIXME - fix loading of tags because you have updated the structure to pid: songid:[array of tsgs]

const puthandler = async (req, res) => {
    let body = await req.json();
  
    try {
      const { spotifyId, tags } = body;
  
      // Extracting playlistId and songId from the provided tags object
      const playlistId = Object.keys(tags)[0];  // Assuming only one playlist is being updated
      const songId = Object.keys(tags[playlistId])[0];
      const newTags = tags[playlistId][songId]; // The new tag array for the song
  
      // Updating only the song's tag array in the specific playlist
      const updateResult = await SpotifyUser.updateOne(
        { spotifyId },
        {
          $set: {
            [`tags.${playlistId}.${songId}`]: newTags, // Dynamic update path for the specific song's tags
          },
        }
      );
  
      if (updateResult.modifiedCount === 0) {
        return NextResponse.json({ error: "No tags updated or user not found" }, { status: 200 });
      }
  
      return NextResponse.json({ message: "Tags updated successfully" }, { status: 200 });
    } catch (error) {
      console.error("Error updating tags:", error);
      return NextResponse.json({ error: error }, { status: 400 });
    }
  };
  

const posthandler = connectDB(handler);
const putHandler = connectDB(puthandler);

export { posthandler as POST, putHandler as PUT };
