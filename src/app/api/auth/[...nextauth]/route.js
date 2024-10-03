import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL } from "@/utils/loginConfig";
import SpotifyWebApi from "spotify-web-api-node";

const refreshAccessToken = async (token) => {
  try {
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    });

    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("my error",error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};


export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],

  secret: process.env.JWT_SECRET,

  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        console.log("Initial sign-in:", { account, user });
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at * 1000,
          username: account.providerAccountId,
        };
      }
    
      if (Date.now() < token.accessTokenExpires) {
        console.log("Token is still valid:", token);
        return token;
      }
    
      console.log("Token has expired, refreshing...");
      return await refreshAccessToken(token);
    },
    
    async session({ session, token }) {
      console.log("Session data:", { session, token });
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;
      return session;
    }
    
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
