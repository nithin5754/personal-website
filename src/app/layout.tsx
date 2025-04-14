import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nithin Joji",
  description: "Nithin joji personal portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
             <main  className=" min-h-screen bg-gradient-to-tr from-[#100730] from-0% via-black via-30% to-[#100730] to-100% text-foreground dark">

                  <NavbarComponent/>
        
                  {children}

      
             </main>
          </ThemeProvider>
      </body>
    </html>
  );
}
