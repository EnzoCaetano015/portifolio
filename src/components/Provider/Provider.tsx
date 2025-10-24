"use client"

import { ThemeProvider, useTheme } from "next-themes"
import React from "react"
import { Toaster, ToasterProps } from "sonner"

export const Provider = ({ children }: React.PropsWithChildren) => {
    const { resolvedTheme } = useTheme()

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            <Toaster
                theme={resolvedTheme as ToasterProps["theme"]}
                richColors
                position="top-right"
            />
            {children}
        </ThemeProvider>
    )
}
