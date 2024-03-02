import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaal Technology",
  description: "Tecnologia y mucho más",
  icons:{
    icon:['/favicon.png?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className }>
        <Navbar/>
        <main className="">
          {children}
        </main>
        <div className="relative h-full md:h-auto ">
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
