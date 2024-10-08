"use client"
import SpiningLogo from '@/components/layout/spiningLogo'
import SpotifyButton from '@/components/layout/spotifyButton'
import Link from 'next/link'
import React from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-2xl lg:-translate-y-1/4 -translate-y-1/2 ">
          <div className="flex justify-center items-center lg:space-x-10 mb-10">
            <SpiningLogo />
          </div>

          <div >
              <Link href="/login">
              <SpotifyButton text={"Login with Spotify"} onClick={() => signIn("spotify", { callbackUrl: "/options" })}/>
              </Link>
              <p className="py-6">Import your playlists, tracks from your spotify account</p>
          </div>
          {/* } */}
        </div>
      </div>
    </div>
  )
}

export default Login