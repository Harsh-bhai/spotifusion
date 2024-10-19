import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SessionWrapper from "@/components/wrappers/sessionWrapper";
import ThemeProvider from "@/components/wrappers/themeProvider";
import { getServerSession } from "next-auth";


const fontGeistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--geist-sans-font",
  weight: "100 900",
});
const fontGeistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--geist-mono-font",
  weight: "100 900",
});

export const metadata = {
  title: "SpottiFusion",
  description: "A tag-based music organizer for Spotify",
};

export default function RootLayout({ children }) {
  const { data: session } = getServerSession();

  console.log(session, "session2");
  
  return (
    <html lang="en">
      <body
        className={`${fontGeistSans.variable} ${fontGeistMono.variable} antialiased`}
      >
          <SessionWrapper>
            <ThemeProvider>
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
          </SessionWrapper>
      </body>
    </html>
  );
}
