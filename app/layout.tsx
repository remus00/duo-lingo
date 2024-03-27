import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Lingo',
    description: 'Learn new languages while playing',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={font.className}>
                    <Toaster />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
