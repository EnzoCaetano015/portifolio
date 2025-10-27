import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Provider } from "@/components/Provider/Provider"
import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { routing } from "@/i18n/routing"

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
    icons: {
        icon: "/logo.png",
    },
    description:
        "Portfolio website of Enzo Caetano, a full stack developer specializing in web development and infrastructure.",
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params
    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    return (
        <html
            lang={locale}
            suppressHydrationWarning
        >
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
                <NextIntlClientProvider>
                    <Provider>{children}</Provider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
