import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

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
    metadataBase: new URL("https://corplanding.com"),
    title: {
        default: "CorpLanding - Premium Corporate Solutions",
        template: "%s | CorpLanding",
    },
    description: "개혁적인 비즈니스 솔루션으로 미래를 만들어갑니다. 혁신, 품질, 성공을 약속합니다.",
    keywords: ["corporate", "business", "solutions", "innovation", "technology", "consulting", "development"],
    authors: [{ name: "CorpLanding Team" }],
    creator: "CorpLanding",
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://corplanding.com",
        title: "CorpLanding - Premium Corporate Solutions",
        description: "개혁적인 비즈니스 솔루션으로 미래를 만들어갑니다. 혁신, 품질, 성공을 약속합니다.",
        siteName: "CorpLanding",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CorpLanding Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CorpLanding - Premium Corporate Solutions",
        description: "개혁적인 비즈니스 솔루션으로 미래를 만들어갑니다.",
        images: ["/og-image.jpg"],
        creator: "@corplanding",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
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
                <ScrollProgress />
                {children}
            </body>
        </html>
    );
}
