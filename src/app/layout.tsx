import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../components/ThemeProvider';
import { ThemeScript } from '../components/ThemeScript';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theme Switcher Demo",
  description: "NextJS app with MUI theme switching without FOWT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
