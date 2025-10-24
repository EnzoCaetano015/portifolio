import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Provider } from "@/components/Provider/Provider"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
})

export const metadata: Metadata = {
    title: "Enzo Caetano - Portfolio",
    description:
        "Portfolio website of Enzo Caetano, a full stack developer specializing in web development and infrastructure.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}
