import type { Metadata } from "next";
import {  Almarai } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../registry/ThemeRegistry";



const _Almarai = Almarai({
  variable: "--font-almarai",
  weight: ["300", "400", '700'], 
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Animify",
  description: "Landing Website Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="dns-prefetch" href="https://html5shim.googlecode.com/" />
      </head>
      <body suppressHydrationWarning  className={_Almarai.variable}>
      <ThemeRegistry>
        {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
