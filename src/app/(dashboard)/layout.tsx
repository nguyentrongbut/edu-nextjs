import type { Metadata } from "next";

import { manrope } from "@/untils";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
    title: "Ucademy",
    description: "Nen tang hoc tap lap trinh truc tuyen vip pro",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
                    <Sidebar></Sidebar>
                    <main className="p-5">{children}</main>
                </div>
            </body>
        </html>
    );
}
