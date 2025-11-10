import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ai-resume-reviewer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="grid grid-cols-1 place-items-center">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Zalando+Sans+SemiExpanded:ital,wght@0,200..900;1,200..900&display=swap');
        </style>
      </head>
      <body className="max-w-7xl w-full shrink-0 p-1">
        <div id="app" className="max-w-dvw">
          <ToastContainer />
          <ThemeProvider attribute="class" defaultTheme="system">
            <StoreProvider>{children}</StoreProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
