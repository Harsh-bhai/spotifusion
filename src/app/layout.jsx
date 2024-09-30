import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SessionWrapper from "@/components/sessionWrapper";

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
  title: "SpotiFusion",
  description: "A tag-based music organizer for Spotify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontGeistSans.variable} ${fontGeistMono.variable} antialiased`}>
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}

