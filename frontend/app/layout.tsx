import type {Metadata} from "next";
import "@/styles/globals.css"
import {fontSans} from "@/lib/fonts"
import {cn} from "@/lib/utils"
import {SiteHeader} from "@/components/site-header";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/toaster"

export const metadata: Metadata = {
    title: "Stockholm",
    description: "Making music matter",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="relative conainer flex min-h-screen flex-col">
                <SiteHeader/>
                <div className="flex-1">{children}</div>
            </div>
            <Toaster/>
        </ThemeProvider>
        </body>
        </html>
    );
}
