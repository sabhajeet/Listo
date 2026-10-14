import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/layout/MobileNavigation";
import "./globals.css";

export const metadata: Metadata = {
title: "Listo - Buy and Sell Locally",
description: "Buy and sell products near you.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return ( <html lang="en">


  <body>

    <Header />

    <main>
      {children}
    </main>

    <Footer />

    <MobileNavigation />

  </body>

</html>


);
}
