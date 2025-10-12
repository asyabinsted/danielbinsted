import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Binsted - Director/Editor/Cinematographer",
  description: "Portfolio of Daniel Binsted - Director, Editor, and Cinematographer showcasing professional work in film and video production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

