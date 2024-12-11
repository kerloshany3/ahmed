import localFont from "next/font/local";
import "./globals.css";
const ArabicUI = localFont({ src: './fonts/DG-Gaza.ttf' })
const ArabicUI2 = localFont({ src: './fonts/LANTX.otf' })
const ArabicUI3 = localFont({ src: './fonts/Rubik.ttf' })

import { Rakkas } from 'next/font/google';

// Configure the font
const rakkas = Rakkas({
  subsets: ['latin'], // Choose the subset(s) you need
  weight: '400', // Specify the weight, if applicable
});
import { Abril_Fatface } from 'next/font/google';
import Footer from "./components/Footer";

const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: '400', // Adjust based on the font options
});

export const metadata = {
  title: "Ahmed El Sayed",
  description: "LMS System Created by Kerlos Hany",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  ${ArabicUI.className}  dark:bg-slate-950   antialiased`}
      >


        <div className=" p-10">


        {children}
        </div>

        <Footer></Footer>
       
      </body>
    </html>
  );
}
