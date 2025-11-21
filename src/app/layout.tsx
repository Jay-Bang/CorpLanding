import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "CorpLanding - Premium Corporate Solutions",
    description: "개혁적인 비즈니스 솔루션으로 미래를 만들어갑니다. 혁신, 품질, 성공을 약속합니다.",
    keywords: ["corporate", "business", "solutions", "innovation", "technology"],
    authors: [{ name: "CorpLanding" }],
    openGraph: {
        title: "CorpLanding - Premium Corporate Solutions",
        description: "개혁적인 비즈니스 솔루션으로 미래를 만들어갑니다.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={`${inter.variable} ${outfit.variable}`}>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
