import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { AuthProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth Next App",
  description: "Authentication next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="max-w-5xl mx-auto px-8">
            <NavBar />
            <div className="flex flex-col items-center justify-center h-screen">
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html >
  );
}
