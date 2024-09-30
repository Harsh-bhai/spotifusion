import SpotifyWebApi from "spotify-web-api-node";

  const scopes = [
    "user-read-email",
    "user-library-read",
    "user-library-modify",
    "user-read-private",
    // "user-read-playback-state",
    // "user-modify-playback-state",
    "playlist-read-private",
    "playlist-modify-public",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "user-follow-read",
    "user-follow-modify",
    "user-top-read",
    "user-read-recently-played",
    "streaming",
    "app-remote-control",
    "user-read-currently-playing",
    "user-read-playback-position",
    "ugc-image-upload",
  ].join(',');


  const params={
    scope: scopes
  }

const queryParamString = new URLSearchParams(params).toString()
const LOGIN_URL= `https://accounts.spotify.com/authorize?${queryParamString}`


export { LOGIN_URL  }
