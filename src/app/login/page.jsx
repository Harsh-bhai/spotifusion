"use client";
import SpiningLogo from "@/components/layout/spiningLogo";
import SpotifyButton from "@/components/layout/spotifyButton";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="hero min-h-screen md:my-10 my-40">
      <div className="hero-content text-center">
        <div className="max-w-2xl lg:-translate-y-1/4 -translate-y-1/2 ">
          <div className="flex justify-center items-center lg:space-x-10 mb-10">
            <SpiningLogo />
          </div>

          <div>
            <Link href="/login">
              <SpotifyButton
                text={"Login with Spotify"}
                onClick={() => signIn("spotify", { callbackUrl: "/options" })}
              />
            </Link>
            <p className="py-6 lg:text-base text-sm">
              Import your playlists, tracks from your spotify account
            </p>
            <div className="py-6 lg:text-base text-sm">
              <div className="flex flex-col md:flex-row space-x-2">
                <p className="text-red-600">Note : </p>
                <p>
                  {"  "}
                   Since, this is a Spotify Developer application, only the registered users
                  can use this app.
                </p>{" "}
              </div>
              <p>
                To use this app send your name and email to
                <a href="mailto:harshdewangan2019@gmail.com">harshdewangan2019@gmail.com</a>
              </p>
              <p>You can see the working of application <Link className="underline text-green-500" href="/how-to-use">here</Link></p>
            </div>
          </div>
          {/* } */}
        </div>
      </div>
    </div>
  );
};

export default Login;
