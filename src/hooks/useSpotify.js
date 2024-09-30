import { signln, useSession } from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";

const UseSpotify = () => {
// const { data: session } = useSession();
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });
//   useEffect(() => {
//     if (session) {
//       if (session.error === "RefreshAcessTokenError" ) {
//         signln();
//       }
//       spotifyApi.setAccessToken(session.user.accessToken);
//     }
//   }, [session]);

  return spotifyApi;
};

export default UseSpotify;
