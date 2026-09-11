import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Patent-A-Thon 2.0",
  description: "Join Patent-A-Thon 2.0 - Premier patent-focused innovation event where groundbreaking ideas transform into protected intellectual property.",
  icons: {
    icon: '/LOGO.svg',
    shortcut: '/LOGO.svg',
    apple: '/LOGO.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
