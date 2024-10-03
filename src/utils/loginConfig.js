import SpotifyWebApi from "spotify-web-api-node";

  const scopes = [
    "ugc-image-upload",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "app-remote-control",
    "streaming",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "user-follow-modify",
    "user-follow-read",
    "user-library-modify",
    "user-library-read",
    "user-read-email",
    "user-read-private",
    "user-top-read",
    "user-read-recently-played",
    "user-read-playback-position"
  ].join(',');


  const params={
    scope: scopes
  }

const queryParamString = new URLSearchParams(params).toString()
const LOGIN_URL= `https://accounts.spotify.com/authorize?${queryParamString}`


export { LOGIN_URL  }
