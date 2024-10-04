import { NextResponse } from "next/server";
import SpotifyUser from "@/models/spotifyUser";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
  let body = await req.json();
  try {
    let spotifyUser = new SpotifyUser(body);
    await spotifyUser.save();
    return NextResponse.json(
      { mssage: "User added successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ mssage: error}, { status: 400 });
  }
};

const postHandler = connectDB(handler);
export { postHandler as POST };
