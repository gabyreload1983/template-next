import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./ui/globals.css";
import Footer from "./ui/footer/footer";
import Navbar from "./ui/navbar/navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | Template",
    default: "Home",
  },
  description: "Template Description",
  keywords: "Template keywords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
