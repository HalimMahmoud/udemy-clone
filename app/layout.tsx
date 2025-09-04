"use client";

import { ReactNode } from "react";
// import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/Navbar";
// import StyledJsxRegistry from "../components/registry";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // <StyledJsxRegistry>

    <html lang="en" className="h-full bg-gray-100">
      <head>
        <title>Next.js</title>
      </head>
      <body className="h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    // </StyledJsxRegistry>
  );
}
