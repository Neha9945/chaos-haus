import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chaos Haus - Premium Fashion Experience',
  description: 'Enter the world of Chaos Haus. A premium fashion digital experience.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#252522',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#252522" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-ch-paper text-ch-black">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
