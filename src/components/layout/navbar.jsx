  "use client";
  import React from "react";
  import Image from "next/image";
  import Link from "next/link";
  import { MdOutlineDarkMode } from "react-icons/md";
  import { useThemeStore } from "@/store/useThemeStore";
  import { useSpotifyStore } from "@/store/useSpotifyStore";
  import { signOut } from "next-auth/react";

  const Navbar = () => {
    const themes = ["light", "dark", "forest", "halloween"]
    const {setTheme} = useThemeStore();
    const {accessToken ,removeAccessToken} = useSpotifyStore();
    return (
      <div className="navbar ">
        {/* logo */}
        <div className="navbar-start lg:ml-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/how-to-use">How to Use</Link>
              </li>
            </ul>
          </div>
          <Link href="/"><Image src={'/logo/logo.png'} width={50} height={50} alt={'Spotifusion Logo'} /></Link>
        </div>

        {/* links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/how-to-use">How to Use</Link>
            </li>
            <li>
              <Link href="/options">Options</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end lg:mr-10">
          {/* Themes */}
          <div className="dropdown dropdown-end mr-5 lg:mr-10">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="">
              <MdOutlineDarkMode className="text-3xl"/>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {themes.map((theme, index) => (
                <li key={index}>
                  <button
                    onClick={() => setTheme(theme)}
                    className="btn btn-ghost btn-sm rounded-btn">
                    {theme}
                  </button>
                </li>
              ))}
              
            </ul>
          </div>
          {/* Profile */}
          {accessToken && <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  width={50}
                  height={50} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href="/profile">Profile</Link></li>
              <li onClick={() => {removeAccessToken(); signOut({callbackUrl: "/"})}}><a>Logout</a></li>
            </ul>
          </div>}
        </div>
      </div>
    );
  };

  export default Navbar;
