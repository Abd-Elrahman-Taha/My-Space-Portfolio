import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Abd El-Rahman Taha",
    description: "Front-End & 3D Web Developer | React | Next.js | Three.js — Portfolio of Abd El-Rahman Taha",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-[1855px] mx-auto`}
            >
                <StarsCanvas />
                <Navbar />
                <div className="relative z-[30]">
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
