import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { ScrollTopButton } from "@/components/ScrollTopButton";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fostar | Rapid Software Development and Boutique Consulting",
  description: "Agile App Development, Mobile App Development, Web App Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <ScrollTopButton />
          {/* <PopupWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
