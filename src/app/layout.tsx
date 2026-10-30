import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shalom Jeremiah | Technology, Enterprise & Global Affairs",
  description:
    "The digital headquarters of Shalom Jeremiah — developer, author, entrepreneur and emerging global thinker.",
  metadataBase: new URL("https://shalomjeremiah.co")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
