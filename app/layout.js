import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { NextAuthProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth Next App",
  description: "Authentication next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="max-w-5xl mx-auto px-8">
            <NavBar />
            <div className="pt-16">
              {children}
            </div>
          </div>
        </NextAuthProvider>
      </body>
    </html >
  );
}
