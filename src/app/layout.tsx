import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { manrope } from "@/untils";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemProvider";

export const metadata: Metadata = {
    title: "Ucademy",
    description: "Nền tảng học lập trình trực tuyến siêu cấp vip pro",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={manrope.className}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
