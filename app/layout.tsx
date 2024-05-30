import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/header";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { initalProfile } from "@/lib/initial-profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GymBeats AI",
  description: "AI GymBeats: Your Fitness, Your Music, Your Way.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const user = await initalProfile();

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header user={user} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
