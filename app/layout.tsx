import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Track Room",
  description: "A virtual meeting room for team collaboration",
  creator: "Abdelrahman Alaa",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/logo.svg",
        },
        variables: {
          colorForeground: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInput: "#252A41",
          colorInputText: "#fff",
        },
      }}
    >
      <html lang="en">
        <body
          className={`bg-dark-2 ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
